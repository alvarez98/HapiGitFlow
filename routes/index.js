const users = require('./users')
const login = require('./login')
const events = require('./events')

module.exports = [
    ...users,
    ...login,
    ...events
]
    
