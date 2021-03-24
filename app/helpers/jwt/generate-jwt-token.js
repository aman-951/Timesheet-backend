/*
 * File: generate-jwt-token.js
 * Path: /app/helpers/generate-jwt-token.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 1:32:34 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:32:49 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const jwt = require('jsonwebtoken');

/**
 * @description Generate JWT-Token
 * @param Object params 
 * @example {_id: String}
 * @return JWT TOKEN
 */
module.exports = (params) => {
    return jwt.sign(params, process.env.JWT_SECRET, { expiresIn: parseInt(process.env.EXPIRY_TIME) })
}