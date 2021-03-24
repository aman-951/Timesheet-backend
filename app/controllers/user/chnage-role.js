/*
 * File: chnage-role.js
 * Path: /app/controllers/user/chnage-role.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 2:28:59 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:23 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/user/chnage-role')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(200, { status: true, message: 'role successfully changed.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}