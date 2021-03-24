/*
 * File: chnage-role.js
 * Path: /app/services/user/chnage-role.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 2:29:51 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:12:12 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/user/update-by-id'),
    entities = ['role_id'],
    filterParam = require('../../helpers/filter-obj')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.params.id, filterParam(req.body, entities)).then(result => {
            return resolve({})
        }).catch(err => {
            return reject(err)
        })
    })
}