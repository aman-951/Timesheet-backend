/*
 * File: count.js
 * Path: /app/services/user/count.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 5:29:49 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:12:16 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const count = require('../../repositories/user/count')

module.exports = (req) => {
    return count()
}