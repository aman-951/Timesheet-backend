/*
 * File: fetch.js
 * Path: /app/repositories/file/fetch.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 2:19:25 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 2:19:25 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection');

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `files` WHERE `id` = ? AND `deleted_at` IS NULL LIMIT 1',
            values: [id]
        }, (err, doc) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!doc || !doc[0])
                return reject({ code: 404, message: 'Invalid Id' })

            return resolve(doc[0])
        })
    });
}