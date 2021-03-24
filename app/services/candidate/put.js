/*
 * File: put.js
 * Path: /app/services/candidate/put.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 7th January 2021 3:59:43 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 1:02:10 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/candidate/update')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.params.id, req.body).then(result => {
            return resolve({})
        }).catch(err => {
            return reject(err)
        })
    })
}