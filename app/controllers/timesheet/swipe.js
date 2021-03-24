

const service = require('../../services/timesheet/swipe')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'swipe data found', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}