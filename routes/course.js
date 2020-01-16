const handlers = require('../handlers/course')
const courseSchema = require('../schemas/courseSchema')

module.exports = [
    {
        method: 'GET',
        path: '/v1/course/{courseUuid}',
        handler: handlers.getCourseByUuid,
        options: {
            validate: {
                params: courseSchema.params,
                failAction: (request, h, error) =>{
                    throw error
                }
            }
        }
    }
]