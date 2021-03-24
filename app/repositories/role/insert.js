/*
 * File: insert.js
 * Path: /app/repositories/role/insert.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 3:27:50 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:08:46 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid'),
    entities = require('../../entities/role'),
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
            sql: 'INSERT INTO `roles` SET ?',
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