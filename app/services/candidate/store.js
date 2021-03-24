/*
 * File: store.js
 * Path: /app/services/candidate/store.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 3:59:22 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 3:59:22 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/candidate/save')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository({ ...req.body, ...{ user_id: req.user.id } }).then(result => {
            return resolve({ id: result.id })
        }).catch(err => {
            return reject(err)
        })
    })
}