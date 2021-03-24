/*
 * File: insert.js
 * Path: /app/repositories/file/insert.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 31st December 2020 10:28:50 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:31:31 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid')

module.exports = (params) => {
    params = { ...params, ...{ id: getId() } }

    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'INSERT INTO `files` SET ?',
            values: [params]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 400, message: 'Unable to save' })

            return resolve(params)
        })
    })
}