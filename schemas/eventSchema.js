const Joi = require('@hapi/joi')

module.exports = {
    create: {
        uuidCourse: Joi.string().uuid({
            version: 'uuidv4'
        }).required(),
        active: Joi.boolean(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        price: Joi.number().integer().required(),
        status: Joi.boolean()
    },
    update: {
        uuid: Joi.string().uuid({
            version: 'uuidv4'
        }),
        uuidCourse: Joi.string().uuid({
            version: 'uuidv4'
        }),
        active: Joi.boolean(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        price: Joi.number().integer().required(),
        status: Joi.boolean()
    }
}