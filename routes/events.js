const handlers = require('../handlers/events');
const eventSchema = require('../schemas/eventSchema');

module.exports = [
    {
        method: 'GET',
        path: '/v1/event/{eventUuid}',
        handler: handlers.eventSchema,
        options: {
            validate: {
                params: eventSchema.params,
                failtAction: (req, h, err) => {
                    throw err;
                }
            }
        }
    }
]