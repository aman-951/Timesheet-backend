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

const list = require('../../repositories/candidate/list'),
    count = require('../../repositories/candidate/count'),
    calculatePagination = require('../../helpers/count-pagination'),
    hideEntities = require('../../entities/candidate/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj')

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