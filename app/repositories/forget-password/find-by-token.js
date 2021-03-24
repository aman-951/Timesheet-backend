/*
 * File: find-by-token.js
 * Path: /app/repositories/forget-password/find-by-token.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 3:57:41 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 3:57:41 am
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
            sql: 'SELECT * FROM `reset_password` WHERE `token` = ? LIMIT 1',
            values: [value]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result || !result[0])
                return reject({ code: 404, message: 'Invalid Token' })

            return resolve(result[0])
        });
    })
}