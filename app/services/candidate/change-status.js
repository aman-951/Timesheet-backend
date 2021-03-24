/*
 * File: change-status.js
 * Path: /app/services/candidate/change-status.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 12:14:30 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:10:52 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/candidate-status/insert')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository({
            ...req.body,
            ...{ user_id: req.user.id, candidate_id: req.params.id }
        }).then(result => {
            return resolve({ id: result.id })
        }).catch(err => {
            return reject(err)
        })
    })
}