/*
 * File: view-status.js
 * Path: /app/services/candidate/view-status.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 11:03:44 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:13 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/candidate-status/get-status-by-candidate-id')

module.exports = (req) => {
    return repository(req.params.id)
}