const Socket = require('wsrecon')
const axios = require('axios')

const SOCKET_OPTIONS = { reconnect: 1000, ping: 3000 }

module.exports = function(url, customOptions = {}) {
  const events = {}

  // Set up websocket
  let ws
  if (/^wss?:\/\//.test(url)) {
    const options = Object.assign({}, SOCKET_OPTIONS, customOptions)
    ws = new Socket(url, options)
    ws.on('open', async (event) => {
      console.log('Connection open')
      if (typeof events.open === 'function') {
        await events.open(event)
      }
    })

    ws.on('close', async (event) => {
      console.log('Connection closed')
      if (typeof events.close === 'function') {
        await events.close(event)
      }
    })

    ws.on('error', async (event) => {
      console.log('Connection error')
      if (typeof events.error === 'function') {
        await events.error(event)
      }
    })

    ws.on('message', async (data, event) => {
      console.log('Received message', data)
      if (typeof events.message === 'function') {
        await events.message(data, event)
      }
    })
  }

  function ajax(path) {
    return async function (...data) {
      console.log({ data })
      const params = { db: { path, data } }
      const config = {}
      const run = (await axios.post(url, params, config)).data
      console.log({ run })
      console.log(JSON.stringify(run.result))
      return run.result
    }
  }

  function socket(path) {
    return async function (...data) {
      console.log({ data })
      const params = { db: { path, data } }
      const run = await ws.fetch(params)
      console.log(JSON.stringify(run.result))
      return run.result
    }
  }
  socket.on = function(event, fn) {
    console.log('REGISTERING EVENT:', event)
    events[event] = fn
  }

  function upload(path) {
    return function(options = {}) {
      return new Promise(function(resolve) {
        const input = document.createElement('input')
        input.type = 'file'
        input.value = null
        if (options.multiple) {
          input.multiple = true
        }
        if (options.accept) {
          input.accept = options.accept
        }
        async function change() {
          console.log('CHANGE')
          const files = input.files
          const params = new FormData()
          params.append('path', path)
          params.append('options', options)
          for (const file of files) {
            params.append('file', file, file.name)
          }
          const config = {
            headers: Object.assign(
              { 'content-type': 'multipart/form-data', 'cache-control': 'no-cache' },
              options.headers || {}
            )
          }
          if (options.progress) {
            config.onUploadProgress = function(event) {
              event.percent = Math.round((event.loaded * 100) / event.total)
              options.progress(event)
            }
          }
          const run = (await axios.post(url, params, config)).data
          console.log({ run })
          console.log(JSON.stringify(run.result))
          resolve(run.result)
        }
        input.addEventListener('change', change)
        input.click()
      })
    }
  }

  async function sub(paths) {
    const params = { sub: paths }
    const run = await ws.fetch(params)
    console.log(JSON.stringify(run.result))
    return run.result
  }
  return { ajax, socket, upload, sub }
}
