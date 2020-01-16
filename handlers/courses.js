const { Courses } = require('../ps-models')
const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')

async function deleteUserId({ params }, h) {

    try {
        await Courses.update({ status: false }, { where: { uuid = uuid } })

    } catch (error) {
        throw Boom.badImplementation('Something went wrong')
    }

    return h
        .response({
            uuid,
            message: 'Course deleted'
        })
        .code(200)
        .header('Content-Type', 'aplication/json')
}

module.exports = {
    deleteUserId
}