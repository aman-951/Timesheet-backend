/*
 * File: update-by-id.js
 * Path: /app/repositories/role/update-by-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 4:26:21 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:09:00 pm
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
            sql: 'UPDATE `roles` SET ? WHERE `id` = ?',
            values: [params, id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 404, message: 'No record updated.' })

            return resolve(params)
        });
    })
}