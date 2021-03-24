/*
 * File: list.js
 * Path: /app/repositories/status/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:51:37 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:10:17 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = (offset, limit) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `statuses` LIMIT ?, ?',
            values: [offset, limit]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    });
}