'use strict'
const handlers = require('../handlers/feedbacks')
const feedbacksSchema = require('../schemas/feedbacksSchema')

module.exports = [
    {
        method: 'POST',
        path: '/v1/feedbacks',
        handler: handlers.createFeedback,
        options: {
            validate:{
                payload: feedbacksSchema.create,
                failAction: (req ,h, err) => {
                    throw err
                }
            }
        }
    }
]