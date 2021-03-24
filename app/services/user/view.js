/*
 * File: view.js
 * Path: /app/services/user/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 10:04:25 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 10:04:25 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const findById = require('../../repositories/user/find-by-id'),
    hideEntities = require('../../entities/user/hidden'),
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