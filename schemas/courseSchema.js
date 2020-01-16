const Joi = require('@hapi/joi')

module.exports = {
    params: {
        courseUuid: Joi.string().uuid({
            version: 'uuidv4'
        })},
    create: {
        nameCourse: Joi.string().required(),
        description: Joi.string().required(),
        active: Joi.boolean(),
        content: Joi.array().strict().items(Joi.object({
            tema: Joi.string(),
            points: Joi.array()
        })).required(),
        requirements: Joi.array().items(Joi.string()).strict().required(),
        learn: Joi.array().items(Joi.string()).strict()
    },
    query: {
        limit: Joi.number().integer().min(1),
        page: Joi.number().integer().min(1),
        offset: Joi.number().integer(),
        name: Joi.string()
    }
}