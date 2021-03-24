/*
 * File: find-by-id.js
 * Path: /app/repositories/candidate/find-by-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 8th January 2021 1:54:27 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 12:11:27 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection')

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `candidates` WHERE `id` = ? AND `deleted_at` IS NULL LIMIT 1',
            values: [id]
        }, (err, doc) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!doc || !doc[0])
                return reject({ code: 404, message: 'No record found!' })

            return resolve(doc[0])
        })
    })
}