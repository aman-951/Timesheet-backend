/*
 * File: save.js
 * Path: /app/repositories/candidate/save.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 4:03:39 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 4:03:39 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection'),
    getId = require('../../helpers/generate-uuid'),
    entities = require('../../entities/candidate'),
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
            sql: 'INSERT INTO `candidates` SET ?',
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