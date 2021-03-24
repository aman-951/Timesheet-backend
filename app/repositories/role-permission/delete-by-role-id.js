/*
 * File: delete-by-role-id.js
 * Path: /app/repositories/role-permission/delete-by-role-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 4:26:24 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:09:41 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection');

/**
 * delete permission by role-id
 * @param Object params
 * 
 * @return Promise
 */
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'DELETE FROM `role_permissions` WHERE `role_id` = ?',
            values: [id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })
                
            // if (!result.affectedRows)
            //     return reject({ code: 400, message: 'Unable to delete' })

            return resolve(true)
        });
    })
}