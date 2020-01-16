const handlers = require('../handlers/events')
const eventSchema = require('../schemas/eventSchema')

module.exports = [
    {
        method:'POST',
        path: 'v1/events',
        handler: handlers.setEvent,
        options: {
            validate: {
                query: eventSchema.create,
                failAction: (request, h, error) => {
                    throw error
                }
            }
        }
    }
]

