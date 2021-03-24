/*
 * File: login-user.js
 * Path: /app/services/user/login-user.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 12:48:52 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 12:48:53 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const hideEntities= require('../../entities/user/hidden'),
    delObj = require('../../helpers/delete-keys-in-obj')

module.exports = (req) => {
    return new Promise(resolve => {
        return resolve(delObj(req.user, hideEntities))
    })
}