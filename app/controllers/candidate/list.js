/*
 * File: list.js
 * Path: /app/controllers/candidate/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 4:09:51 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:00:42 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */


const service = require('../../services/candidate/list')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(200, { status: true, message: 'candidates found', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}