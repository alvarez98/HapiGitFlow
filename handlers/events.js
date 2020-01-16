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

module.exports = {
    getEventByUuid,
}