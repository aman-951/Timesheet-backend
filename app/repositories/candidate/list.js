/*
 * File: list.js
 * Path: /app/repositories/candidate/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 4:44:09 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:50:23 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection')

module.exports = (offset, limit) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `candidates` WHERE `deleted_at` IS NULL LIMIT ?, ?',
            values: [offset, limit]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    })
}