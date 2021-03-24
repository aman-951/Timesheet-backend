/*
 * File: list.js
 * Path: /app/services/permission/list.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 3:39:39 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 3:39:40 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const all = require('../../repositories/permission/all')

module.exports = (req) => {
    return all()
}