const { Courses } = require('../ps-models')
const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')

async function deleteUserId({ params }, h) {

    try {
        await Courses.update({ status: false }, { where: { uuid = uuid } })

    } catch (error) {
        throw Boom.badImplementation('Something went wrong')
    }

    return h
        .response({
            uuid,
            message: 'Course deleted'
        })
        .code(200)
        .header('Content-Type', 'aplication/json')
}

const { Course } = require('../ps-models')
const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')

async function postCourse({ payload }, h) {
    let { active = true } = payload
    payload.active = active
    const dataCourse = Object.assign(payload, { uuid: uuid4() })
    let course
    try {
        course = await Course.create(dataCourse)
    } catch (error) {
        console.log(error)
        throw Boom.badImplementation('Something went wrong')
    }
    return h
        .response({ id: course.uuid, message: 'Successfully created' })
        .code(201)
        .header('Content-Type', 'application/json')
}
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
<<<<<<< HEAD
    postCourse,
    getCourseByUuid
=======
    deleteUserId,
    postCourse
>>>>>>> develop
}