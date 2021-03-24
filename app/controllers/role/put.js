/*
 * File: put.js
 * Path: /app/controllers/role/put.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 4:24:09 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:02:09 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/role/put')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(201, { status: true, message: 'Role updated.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}