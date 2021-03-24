/*
 * File: update.js
 * Path: /app/repositories/candidate/update.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 7th January 2021 4:01:14 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:08:13 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const connection = require('../../../database/connection'),
    entities = require('../../entities/candidate'),
    filterParam = require('../../helpers/filter-obj');

/**
 * Store single record into user table
 * @param Object params
 * 
 * @return Promise
 */
module.exports = (id, params) => {
    return new Promise((resolve, reject) => {
        params = filterParam(params, entities)

        connection.query({
            sql: 'UPDATE `candidates` SET ? WHERE `id` = ?',
            values: [params, id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: err.message })

            if (!result.affectedRows)
                return reject({ code: 400, message: 'Unable to update' })

            return resolve(params)
        });
    })
}