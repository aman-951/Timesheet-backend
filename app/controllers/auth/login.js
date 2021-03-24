/*
 * File: login.js
 * Path: /app/controllers/auth/login.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:04:26 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 9:59:58 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */


const service = require('../../services/auth/login')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'Login Success', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}