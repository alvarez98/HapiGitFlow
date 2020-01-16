const { Event } = require('../ps-models/event')
const { Course } = require('../ps-models/course')
const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')
const Sequelize = require('sequelize')

async function setEvent( { payload }, h){
    let { uuidCourse, active = true, status = false} = payload
    payload.active = active
    payload.status = status
    let course, event
    try{
        course = await Course.findOne({ where: { uuidCourse } })
    }catch(error){
        throw Boom.badImplementation('Something went wrong')
    }
    const dataEvent = Object.assign(payload, { uuid : uuid4() })
    if(course.dataValues != null){
        try{
            ok = await Event.create(dataEvent)
        }catch(error){
            throw Boom.badImplementation('Something went wrong')
        }
    }
    return h.response({ id: user.uuid, message: 'Successfully created'}).code(201).header('Content-Type', 'application/json')
},
async function update({ params }, h){
    let { uuid } = params, event
    try {
        event = await Event.update({ where: { uuid: userUuid }})
    } catch (error) {
        throw Boom.badImplementation('Something went wrong') 
    }
    return h.response(event).code(200).header('Content-Type', 'application/json')
}
module.exports = {
    setEvent
}