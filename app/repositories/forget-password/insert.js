/*
 * File: insert.js
 * Path: /app/repositories/forget-password/insert.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 3:10:07 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 3:10:08 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid');

/**
 * Store single record into user table
 * @param Object params
 * 
 * @return Promise
 */
module.exports = (params) => {
    return new Promise((resolve, reject) => {
        params = { ...params, ...{ token: getId() } }

        connection.query({
            sql: 'INSERT INTO `reset_password` SET ?',
            values: [params]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 400, message: 'Unable to insert' })

            return resolve(params)
        });
    })
}