/*
 * File: change-status.js
 * Path: /app/controllers/candidate/change-status.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 12:13:22 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:00:26 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */


const service = require('../../services/candidate/change-status')

module.exports = (req, res) => {
    service(req).then(result => {
        return res.send(200, { status: true, message: 'candidates status successfully changed.', data: result })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}