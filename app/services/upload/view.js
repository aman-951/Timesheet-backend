/*
 * File: view.js
 * Path: /app/services/upload/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 3:47:10 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 3:47:11 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/file/find-by-id'),
    hideEntities = require('../../entities/file/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.params.id).then(doc => {
            return resolve(delObj(doc, hideEntities))
        }).then(err => {
            return reject(err)
        })
    })
}