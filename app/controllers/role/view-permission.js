/*
 * File: view-permission.js
 * Path: /app/controllers/role/view-permission.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 2:00:54 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:02:16 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/role/view-permission')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(200, { status: true, message: 'Role-permissions detail.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}