/*
 * File: list.js
 * Path: /app/services/user/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 8:02:44 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 8:02:44 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const count = require('../../repositories/user/count'),
    list = require('../../repositories/user/list'),
    hideEntities = require('../../entities/user/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj'),
    calculatePagination = require('../../helpers/count-pagination')

module.exports = (req) => {
    let pagination = calculatePagination(req.params)

    return new Promise((resolve, reject) => {
        Promise.all([
            count(),
            list(pagination.offset, pagination.limit)
        ]).then(result => {
            return resolve({
                list: result[1].map(doc => delObj(doc, hideEntities)),
                limit: pagination.limit,
                total: result[0].total,
                current_page: pagination.page
            })
        }).catch(err => {
            return reject(err)
        })
    })
}