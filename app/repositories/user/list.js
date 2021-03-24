/*
 * File: list.js
 * Path: /app/repositories/user/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 8:08:28 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 8:08:28 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = (offset, limit) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT `users`.*, `roles`.`name` AS `role` FROM `users` INNER JOIN `roles` ON `roles`.`id` = `users`.`role_id` WHERE `users`.`deleted_at` IS NULL LIMIT ?, ?',
            values: [offset, limit]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    });
}