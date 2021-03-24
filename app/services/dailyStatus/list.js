
const repository = require('../../repositories/dailyStatus/list')
module.exports = (req) => {
    //let pagination = calculatePagination(req.params)

    return new Promise((resolve, reject) => {
       repository(req.params).then(result => {
            return resolve( result)
        }).catch(err => {
            return reject(err)
        })
    })
}