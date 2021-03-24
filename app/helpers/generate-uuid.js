/*
 * File: generate-uuid.js
 * Path: /app/helpers/generate-uuid.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Sunday, 10th January 2021 2:27:32 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Sunday, 10th January 2021 2:27:32 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const uuid = require('uuid-random')

module.exports = () => {
    return uuid()
}