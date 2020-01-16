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
module.exports = {
    createFeedback
}