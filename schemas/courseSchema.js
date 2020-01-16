const Joi = require('@hapi/joi')

module.exports = {
<<<<<<< HEAD
    params: {
        courseUuid: Joi.string().uuid({
            version: 'uuidv4'
        })},
=======
    delete: {
        uuid: Joi.string().required(),
        version: 'uuidv4'
    },
>>>>>>> develop
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