/*
 * File: find-by-id.js
 * Path: /app/repositories/user/find-by-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 1:19:59 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:34:25 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection');

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT `users`.*, `roles`.`name` AS `role` FROM `users` INNER JOIN `roles` ON `roles`.`id` = `users`.`role_id` WHERE `users`.`id` = ? AND `users`.`deleted_at` IS NULL LIMIT 1',
            values: [id]
        }, (err, doc) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!doc || !doc[0])
                return reject({ code: 404, message: 'No record found!' })

            return resolve(doc[0])
        })
    });
}