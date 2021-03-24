/*
 * File: view.js
 * Path: /app/controllers/upload/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 3:45:53 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:08 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/upload/view')

module.exports = (req, res) => {
    service(req).then(response => {
        return res.send(200, { status: true, message: 'File detail', data: response })
    }).catch(error => {
        return res.send(error.code, { status: false, message: error.message })
    })
}