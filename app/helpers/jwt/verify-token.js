/*
 * File: verify-token.js
 * Path: /app/helpers/verify-token.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 1:37:40 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:10 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

 const jwt = require('jsonwebtoken');

module.exports = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}
