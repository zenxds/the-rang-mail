const Mail = require('./Mail')

module.exports = function(options={}) {
  return {
    service: new Mail(options)
  }
}