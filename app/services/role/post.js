/*
 * File: post.js
 * Path: /app/services/role/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 3:24:51 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:31 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/role/insert')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.body).then(result => {
            return resolve({ id: result.id })
        }).catch(err => {
            return reject(err)
        })
    })
}