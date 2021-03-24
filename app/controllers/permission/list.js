/*
 * File: list.js
 * Path: /app/controllers/permission/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 3:38:50 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:01:36 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/permission/list')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'permissions', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}