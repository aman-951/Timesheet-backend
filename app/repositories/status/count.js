/*
 * File: count.js
 * Path: /app/repositories/status/count.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:51:23 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:10:03 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = () => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT COUNT(`id`) AS `total` FROM `statuses` LIMIT 1',
            values: []
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            return resolve(result[0].total)
        })
    });
}