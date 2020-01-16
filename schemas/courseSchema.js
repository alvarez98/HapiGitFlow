const Joi = require('@hapi/joi')

module.exports = {
    params: {
        courseUuid: Joi.string().uuid({
            version: 'uuidv4'
        })
    }
}