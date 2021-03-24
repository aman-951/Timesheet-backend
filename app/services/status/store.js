/*
 * File: store.js
 * Path: /app/services/status/store.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:45:09 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:12:01 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/status/insert')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.body).then(result => {
            return resolve({ id: result.id })
        }).catch(err => {
            return reject(err)
        })
    })
}