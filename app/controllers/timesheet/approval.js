
const service = require('../../services/timesheet/approval')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'employees reporting to manager found', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}