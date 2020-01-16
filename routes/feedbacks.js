const handlers = require('../handlers/events');
const feedbackSchema = require('../schemas/eventSchema');

module.exports = [
    {
        method: 'GET',
        path: 'v1/feedbacks/{uuid}',
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