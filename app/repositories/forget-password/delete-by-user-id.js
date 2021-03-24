/*
 * File: delete-by-user-id.js
 * Path: /app/repositories/forget-password/delete-by-user-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 7:19:53 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 7:19:53 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection')

/**
 * Store single record into user table
 * @param Object params
 * 
 * @return Promise
 */
module.exports = (value) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'DELETE FROM `reset_password` WHERE `user_id` = ?',
            values: [value]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result || !result.affectedRows)
                return reject({ code: 404, message: 'No record found' })

            return resolve(result)
        });
    })
}