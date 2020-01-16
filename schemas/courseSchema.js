const Joi = require('@hapi/joi')

module.exports = {
    delete: {
        uuid: Joi.string().required(),
        version: 'uuidv4'
    }
}