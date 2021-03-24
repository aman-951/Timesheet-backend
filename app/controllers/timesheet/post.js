
const service = require('../../services/timesheet/store')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(201, { status: true, message: 'timesheet successfully saved.', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}