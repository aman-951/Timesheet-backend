/*
 * File: count.js
 * Path: /app/controllers/user/count.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 5:28:38 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:30 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/user/count')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(200, { status: true, message: 'user count', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}