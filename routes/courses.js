const handlers = require('../handlers/courses')
const courseSchema = require('../schemas/courseSchema')

module.exports = [
    {
        method: 'POST',
        path: '/v1/courses',
        handler: handlers.postCourse,
        options: {
            validate: {
                payload: courseSchema.create,
                failAction: (request, h, error) => {
                    throw error
                }
            }
        }
    }
]