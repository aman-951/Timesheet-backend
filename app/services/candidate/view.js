/*
 * File: list.js
 * Path: /app/services/candidate/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 4:19:33 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 4:19:33 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const findById = require('../../repositories/candidate/find-by-id'),
    hideEntities = require('../../entities/candidate/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        findById(req.params.id).then(result => {
            return resolve(delObj(result, hideEntities))
        }).catch(err => {
            return reject(err)
        })
    })
}