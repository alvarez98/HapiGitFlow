const { Course } = require('../ps-models')
const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')

async function postCourse({ payload }, h){
    let { active = true } = payload
    payload.active = active
    const dataCourse = Object.assign(payload, { uuid: uuid4()})
    let course
    try {
        course = await Course.create(dataCourse)
    } catch (error) {
        console.log(error)
        throw Boom.badImplementation('Something went wrong')
    }
    return h
        .response({ id: course.uuid, message: 'Successfully created'})
        .code(201)
        .header('Content-Type', 'application/json')
}

module.exports = {
    postCourse
}