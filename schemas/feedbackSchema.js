const joi = require('@hapi/joi')

module.exports = {
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