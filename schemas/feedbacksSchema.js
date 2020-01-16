const Joi = require('@hapi/joi')

module.exports = {
     create:{
         uuidUser: Joi.string().required(),
         uuidEvent: Joi.string().required(),
         score: Joi.number().integer(),
         feedback: Joi.string().required()
     }
}