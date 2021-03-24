/*
 * File: reset-password.js
 * Path: /app/controllers/auth/reset-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 3:53:12 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:00:05 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/auth/reset-password')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'Password successfully updated.', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}