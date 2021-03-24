/*
 * File: list.js
 * Path: /app/repositories/role/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 2:13:02 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:08:55 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = () => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `roles` WHERE `deleted_at` IS NULL',
            values: []
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    });
}