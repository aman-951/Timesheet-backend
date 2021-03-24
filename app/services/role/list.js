/*
 * File: list.js
 * Path: /app/services/role/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 2:08:10 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:23 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const list = require('../../repositories/role/list'),
    hideEntities = require('../../entities/role/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        list().then(result => {
            return resolve(result.map(doc => delObj(doc, hideEntities)))
        }).catch(err => {
            return reject(err)
        })
    })
}