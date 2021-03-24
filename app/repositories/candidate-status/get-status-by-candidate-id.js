/*
 * File: get-status-by-candidate-id.js
 * Path: /app/repositories/candidate-status/get-status-by-candidate-id.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 11:10:33 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:08:22 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const connection = require('../../../database/connection')

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: 'SELECT `candidate_status`.*, `statuses`.`name` FROM `candidate_status` INNER JOIN `statuses` ON `statuses`.`id` = `candidate_status`.`status_id` WHERE `candidate_id` = ? ORDER BY `created_at` DESC',
            values: [id]
        }, (err, result) => {
            if (err)
                return reject({ code: 502, message: doc.message })

            if (!result)
                return reject({ code: 404, message: 'No record found!' })

            return resolve(result)
        })
    })
}