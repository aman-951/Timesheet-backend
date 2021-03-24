/*
 * File: update-by-id.js
 * Path: /app/repositories/user/update-by-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 2:30:55 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:10:39 pm
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
module.exports = (id, params) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'UPDATE `users` SET ? WHERE `id` = ?',
            values: [params, id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 400, message: 'Unable to update' })

            return resolve(result)
        });
    })
}