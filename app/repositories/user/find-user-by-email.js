/*
 * File: find-user-by-email.js
 * Path: /app/repositories/user/find-user-by-email.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:18:54 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:34:31 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection')

module.exports = (value) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT * FROM `users` WHERE `email` = ? AND `deleted_at` IS NULL LIMIT 1',
            values: [value]
        }, (err, doc) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!doc || !doc[0])
                return reject({ code: 404, message: 'No user found!' })

            return resolve(doc[0])
        })
    })
}