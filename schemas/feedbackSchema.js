const Joi = require('@hapi/joi');

module.exports = {
    getFeedbackByUuid: {
        uuid: Joi.string().required(),
        uuidEvent: Joi.string().required(),
        score: Joi.number().integer().required(),
        feedback: Joi.string().required(),
    },
    payload: {
        uuidEvent: joi.string(),
        score: joi.number().integer().min(1).max(5),
        feedback: joi.string(),     
    },
    params: {
        uuid: Joi.string().uuid({
            version: 'uuidv4'
        }).required()
    }
}