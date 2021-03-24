/*
 * File: update-password.js
 * Path: /app/repositories/user/update-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 6:48:57 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 6:49:27 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection');

/**
 * Store single record into user table
 * @param Object params
 * 
 * @return Promise
 */
module.exports = (id, password) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'UPDATE `users` SET `password` = ? WHERE `id` = ? LIMIT 1',
            values: [password, id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 400, message: 'Unable to update' })

            return resolve(result)
        });
    })
}