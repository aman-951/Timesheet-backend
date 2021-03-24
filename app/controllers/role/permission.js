/*
 * File: permission.js
 * Path: /app/controllers/role/permission.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 3:54:25 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:01:55 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/role/update-permission')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(200, { status: true, message: 'Permission updated.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}