/*
 * File: put.js
 * Path: /app/services/role/put.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 4:24:54 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:36 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/role/update-by-id'),
    entities = require('../../entities/role'),
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