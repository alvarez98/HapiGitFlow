const Joi = require('@hapi/joi');

module.exports = {
    getFeedbackByUuid: {
        uuid: Joi.string().required(),
        uuidEvent: Joi.string().required(),
        score: Joi.number().integer().required(),
        feedback: Joi.string().required(),
    },
    params: {
        uuid: Joi.string().uuid({
            version: 'uuidv4',
        })
    }
}