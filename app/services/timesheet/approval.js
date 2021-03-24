
const repository = require('../../repositories/timesheet/approval')
  

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