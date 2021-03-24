/*
 * File: save.js
 * Path: /app/repositories/user/save.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:53:55 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:07 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid'),
    entities = require('../../entities/user/user'),
    filterParam = require('../../helpers/filter-obj');

/**
 * Store single record into user table
 * @param Object params
 * 
 * @return Promise
 */
module.exports = (params) => {
    return new Promise((resolve, reject) => {
        params = { ...filterParam(params, entities), ...{ id: getId() } }

        connection.query({
            sql: 'INSERT INTO `users` SET ?',
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