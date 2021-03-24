/*
 * File: share.js
 * Path: /app/controllers/candidate/share.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 3:18:28 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:01:13 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/candidate/share')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'application shared with email', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}