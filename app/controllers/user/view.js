/*
 * File: view.js
 * Path: /app/controllers/user/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 8:44:10 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:47 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/user/view')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'User detail', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}