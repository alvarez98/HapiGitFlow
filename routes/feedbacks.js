<<<<<<< HEAD
const handlers = require('../handlers/events');
const feedbackSchema = require('../schemas/eventSchema');

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
    }
]
const handlers = require('../handlers/feedbacks')
const feedbackSchema = require('../schemas/feedbackSchema')

module.exports= [
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
>>>>>>> develop
]