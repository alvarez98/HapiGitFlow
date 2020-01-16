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
},
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
