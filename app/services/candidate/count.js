/*
 * File: count.js
 * Path: /app/services/candidate/count.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 7th January 2021 3:48:08 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:10:57 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const count = require('../../repositories/candidate/count')

module.exports = (req) => {
    return count()
}