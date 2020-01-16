const handlers = require('../handlers/events')
const eventSchema = require('../schemas/eventSchema')

module.exports = [
    {
        method:'POST',
        path: '/v1/events',
        handler: handlers.setEvent,
        options: {
            validate: {
                query: eventSchema.create,
                failAction: (request, h, error) => {
                    throw error
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/v1/events/{uuid}',
        handler: handlers.updateEvent,
        options: {
            validate: {
                query: eventSchema.update,
                failAction: (request, h, error) => {
                    throw error
                }
            }
        }
    }
]

