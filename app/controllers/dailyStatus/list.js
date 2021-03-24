
const service = require('../../services/dailyStatus/list')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'daily Status found', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}