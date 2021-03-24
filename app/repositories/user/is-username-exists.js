/*
 * File: is-username-exists.js
 * Path: /app/repositories/user/is-username-exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 29th December 2020 3:12:59 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:00 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection')

module.exports = (value) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT COUNT(`username`) AS `exists` FROM `users` WHERE `username` = ? AND `deleted_at` IS NULL LIMIT 1',
            values: [value]
        }, (err, doc) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!doc || !doc[0])
                return reject({ code: 404, message: 'No user found!' })

            return resolve(Boolean(doc[0].exists))
        });
    })
}