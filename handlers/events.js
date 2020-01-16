const { Event } = require('../ps-models');
const uuid4 = require('uuid/v4');
const Boom = require('@hapi/boom');
const Sequelize = require('sequelize');

getEventByUuid = async ({params}, h) => {
    let {eventUuid} = params, event;

    try {
        event = await Event.findOne({where: {uuid: eventUuid}})
    } catch(err){
        throw Boom.badImplementation('Something went wrong');
    }

    return h
        .response(event)
        .code(200)
        .header('Content-Type', 'application/json');
}

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
}

module.exports = {
    getEventByUuid,
    setEvent
}