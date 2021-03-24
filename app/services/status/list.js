/*
 * File: list.js
 * Path: /app/services/status/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:49:42 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:56 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const count = require('../../repositories/status/count'),
    list = require('../../repositories/status/list'),
    calculatePagination = require('../../helpers/count-pagination')

module.exports = (req) => {
    let pagination = calculatePagination(req.params)

    return new Promise((resolve, reject) => {
        Promise.all([
            count(),
            list(pagination.offset, pagination.limit)
        ]).then(result => {
            return resolve({
                list: result[1],
                limit: pagination.limit,
                total: result[0],
                current_page: pagination.page
            })
        }).catch(err => {
            return reject(err)
        })
    })
}