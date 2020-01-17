'use strict'
const handlers = require('../handlers/feedbacks')
const feedbacksSchema = require('../schemas/feedbacksSchema')

module.exports = [

    {
        method: 'GET',
        path: '/v1/feedbacks/{uuid}',
        handler: handlers.feedbackSchema,
        options: {
            validate: {
                params: feedbackSchema.params,
                failAction: (req, h, err) => {
                    throw err;
                }
            }
        }
    } ,   
    {
        method: 'GET',
        path: '/v1/feedbacks/{uuid}',
        handler: handlers.feedbackSchema,
        options: {
            validate: {
                params: feedbackSchema.params,
                failAction: (req, h, err) => {
                    throw err;
                }
            }
        }
    },
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
    },
    {
        method: 'PUT',
        path: '/v1/feedbacks/{uuid}',
        handler: handlers.updateFeedback,
        options: {
            validate: {
                payload: feedbackSchema.payload,
                params: feedbackSchema.params,
                failAction: (request, h, error) => {
                    throw error
                }
            }
        }
    }
]                
