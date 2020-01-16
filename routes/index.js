const users = require('./users')
const login = require('./login')
const course = require('./course')

module.exports = [
    ...users,
    ...login,
    ...course
]
    
