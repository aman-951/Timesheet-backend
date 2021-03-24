/*
 * File: post.js
 * Path: /app/controllers/status/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:44:16 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:02:38 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/status/store')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(201, { status: true, message: 'Status added.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}