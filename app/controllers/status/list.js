/*
 * File: list.js
 * Path: /app/controllers/status/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:48:55 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:02:32 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/status/list')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(200, { status: true, message: 'Status ist.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}