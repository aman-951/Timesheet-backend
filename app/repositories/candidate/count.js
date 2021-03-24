/*
 * File: count.js
 * Path: /app/repositories/candidate/count.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 7th January 2021 3:48:59 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:55:29 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection')

module.exports = () => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT COUNT(`id`) AS `total` FROM `candidates` WHERE `deleted_at` IS NULL LIMIT 1',
            values: []
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            return resolve(result[0])
        })
    });
}