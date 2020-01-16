const users = require('./users')
const login = require('./login')
const courses = require('./courses')

module.exports = [
    ...users,
    ...login,
    ...courses
]
    
