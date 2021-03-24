/*
 * File: view.js
 * Path: /app/services/role/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 1:56:09 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:50 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const list = require('../../repositories/role/view')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        list(req.params.id).then(result => {
            return resolve(result)
        }).catch(err => {
            return reject(err)
        })
    })
}