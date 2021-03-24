/*
 * File: post.js
 * Path: /app/controllers/role/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 3:23:44 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:02:01 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/role/post')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(201, { status: true, message: 'Role created.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}