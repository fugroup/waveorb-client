const _ = require('lodash')
const http = require('taarn')
const socket = require('wsrecon')

module.exports = function(url, options = {}) {
  if (url.indexOf('ws') === 0) {
    return socket(url, options)
  } else {
    return {
      fetch: function(params) {
        return http(url, { params })
      },
      upload: function(params, ...files) {
        files = _.flatten(files)
        return http(url, { params, files })
      }
    }
  }
}
