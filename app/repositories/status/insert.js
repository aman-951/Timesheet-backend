/*
 * File: insert.js
 * Path: /app/repositories/status/insert.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:46:11 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:10:08 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid'),
    entities = require('../../entities/status'),
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
            sql: 'INSERT INTO `statuses` SET ?',
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