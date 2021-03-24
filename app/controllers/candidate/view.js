/*
 * File: view.js
 * Path: /app/controllers/candidate/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 8th January 2021 1:53:30 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:01:24 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/candidate/view')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'candidate successfully found', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}