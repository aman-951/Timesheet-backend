/*
 * File: list.js
 * Path: /app/controllers/user/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 7:45:04 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:36 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/user/list')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'User list', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}