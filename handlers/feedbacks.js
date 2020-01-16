const {Feedback} = require('../ps-models')
const Boom = require('@hapi/boom')

async function updateFeedback({ payload, params }, h){
 try {
     await Feedback.update(payload,{where: {uuid: params.uuid}})
    }catch (error){
        throw Boom.badImplementation('field was NOT updated')
        
    }
    return h
    .response({
        uuid: params.uuid,
        message: 'Successfully updated'
    }).code(200).header('Content-Type', 'application/json')
}


module.exports = {
    updateFeedback
}