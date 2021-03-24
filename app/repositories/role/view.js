/*
 * File: view.js
 * Path: /app/repositories/role/view.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 1:57:31 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:09:05 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `roles` WHERE `id` = ? AND `deleted_at` IS NULL LIMIT 1',
            values: [id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result[0])
        })
    });
}