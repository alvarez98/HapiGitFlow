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

getFeedbackByUuid = async ({params}, h) => {
    let { uuid } = params.uuid, feedback;

    try {
        feedback = await Feedback.findOne({where: {uuid}});
    } catch(err){
        throw err;
    }

    return h
        .response(feedback)
        .code(200)
        .header('Contet-Type', 'application/json');
}

module.exports = {
    updateFeedback,
    getFeedbackByUuid,
}