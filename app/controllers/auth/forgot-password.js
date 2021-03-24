/*
 * File: forgot-password.js
 * Path: /app/controllers/auth/forgot-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 5:26:49 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 9:59:52 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/auth/forgot-password')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'Please check your Email.', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}