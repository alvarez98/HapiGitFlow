const users = require('./users')
const login = require('./login')
const courses = require('./courses')
const events = require('./events')

module.exports = [
    ...users,
    ...login,
    ...courses,
    ...events
]
    
