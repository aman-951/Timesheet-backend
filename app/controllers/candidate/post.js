/*
 * File: post.js
 * Path: /app/controllers/candidate/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 3:58:14 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:00:58 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/candidate/store')

module.exports = (req, res) => {
    service(req).then(success => {
        return res.send(201, { status: true, message: 'candidate successfully saved.', data: success })
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}