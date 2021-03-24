/*
 * File: login-user.js
 * Path: /app/controllers/user/login-user.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 12:46:53 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:42 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/user/login-user')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'User detail', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}