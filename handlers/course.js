const { Course } = require('../ps-models/course')
const Boom = require('@hapi/boom')

async function getCourseByUuid ({ params }, h){
    let { courseUuid } = params, course
    try {
        course = await Course.findOne ( { where : { uuid: courseUuid}})
    }catch (error) {
        throw Boom.notFound('Course not found')
    }
    return h
        .response(course)
        .code(200)
        .header('Content-Type', 'application/json')
}

module.exports = {
    getCourseByUuid
}