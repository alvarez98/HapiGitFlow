const handlers = require('../handlers/courses')
const userSchema = require('../schemas/courseSchema')

module.exports = [{
    method: 'PUT',
    path: '/v1/courses/{uuid}',
    handler: handlers.deleteUserId,
    options: {
        validate: {
            params: courseSchema.delete,
            failAction: (request, h, error) => {
                throw error
            }
        }
    }
}]