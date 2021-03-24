/*
 * File: post.js
 * Path: /app/controllers/upload/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 31st December 2020 9:49:48 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:02:53 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/upload/index')

module.exports = (req, res) => {
    service(req).then(response => {
        return res.send(201, { status: true, message: 'File successfully saved', data: response })
    }).catch(error => {
        return res.send(error.code, { status: false, message: error.message })
    })
}