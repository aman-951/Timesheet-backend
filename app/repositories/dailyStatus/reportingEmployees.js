
const connection = require('../../../database/connection')

module.exports = (params) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `users` WHERE `managerId`= ?',
            values: [params.empId]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    })
}