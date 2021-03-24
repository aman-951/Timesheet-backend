/*
 * File: signup.js
 * Path: /app/controllers/auth/signup.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:51:35 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:00:10 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */


const service = require('../../services/auth/signup')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(201, { status: true, message: 'Signup Success', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}