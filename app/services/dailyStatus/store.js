
const repository = require('../../repositories/dailyStatus/save')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.body).then(result => {
            return resolve({ id: result.id })
        }).catch(err => {
            return reject(err)
        })
    })
}