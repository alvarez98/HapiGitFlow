const Joi = require('@hapi/joi');

module.exports = {
    getEventByUuid: {
        uuid: Joi.string().require(),
        active: Joi.bool(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        price: Joi.number().integer().required(),
        status: Joi.bool().required(),
    },
    params: {
        uuid: Joi.string().uuid({
            version: 'uuidv4'
        })
    },
    create: {
        uuidCourse: Joi.string().uuid({
            version: 'uuidv4'
        }).required(),
        active: Joi.boolean(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        price: Joi.number().integer().required(),
        status: Joi.boolean()
    }
}