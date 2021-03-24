/*
 * File: count.js
 * Path: /app/controllers/candidate/count.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 7th January 2021 3:47:34 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:00:36 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/candidate/count')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'candidates count', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}