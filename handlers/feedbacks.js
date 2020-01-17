const { FeedBack , User , Event } = require('../ps-models')
const uuid4 = require('uuid/v4')

const Boom = require('@hapi/boom')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

async function createFeedback ({ payload }, h){
    let { active = true , uuidUser, uuidEvent } = payload, feedback, user, event
    payload.active = active
    const feedbackData = Object.assign( payload, {uuid: uuid4()} )
    try{
       user = await User.findOne({ where: { uuid: uuidUser }})
        event = await Event.findOne({ where: { uuid: uuidEvent } })
       if (user.DataValues !== null && event.DataValues !== null){
            feedback = await FeedBack.create(feedbackData)
       }
    }catch ( err ){
        throw Boom.badImplementation('likely the user or event  doesnt exist')
    }
    return h
       .response({ id: feedback.uuid, message: 'Successfully created' })
       .code(201)
       .header('Content-Type','application/json')
}

async function updateFeedback({ payload, params }, h) {
    try {
        await Feedback.update(payload, { where: { uuid: params.uuid } })
    } catch (error) {
        throw Boom.badImplementation('field was NOT updated')

    }
    return h
        .response({
            uuid: params.uuid,
            message: 'Successfully updated'
        }).code(200).header('Content-Type', 'application/json')
}
module.exports = {
    createFeedback,
    updateFeedback
}