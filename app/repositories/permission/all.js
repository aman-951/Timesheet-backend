/*
 * File: all.js
 * Path: /app/repositories/permission/all.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 3:40:44 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 3:40:44 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = () => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `permissions`',
            values: []
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!result || !result.length)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    });
}