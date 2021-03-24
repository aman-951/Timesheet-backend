/*
 * File: is-name-exists.js
 * Path: /app/repositories/role/is-name-exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 3:27:04 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:08:51 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection')

module.exports = (value) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT COUNT(`name`) AS `exists` FROM `roles` WHERE `name` = ? AND `deleted_at` IS NULL LIMIT 1',
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