
const repository = require('../../repositories/timesheet/list'),
    hideEntities = require('../../entities/candidate/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj')

module.exports = (req) => {

    return new Promise((resolve, reject) => {
       repository(req.params).then(result => {
            return resolve( result)
        }).catch(err => {
            return reject(err)
        })
    })
}