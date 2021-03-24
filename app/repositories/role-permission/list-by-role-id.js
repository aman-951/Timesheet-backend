/*
 * File: list-by-role-id.js
 * Path: /app/repositories/role-permission/list-by-role-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 2:02:53 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:09:57 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection');

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT `role_permissions`.`permission_id`, `role_permissions`.`role_id`, `permissions`.`key`, `permissions`.`description` FROM `role_permissions` INNER JOIN `permissions` ON `permissions`.`id` = `role_permissions`.`permission_id` WHERE `role_permissions`.`role_id` = ?',
            values: [id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result)
                return reject({ code: 404, message: 'No record found.' })

            return resolve(result)
        })
    });
}