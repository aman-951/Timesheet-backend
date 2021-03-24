/*
 * File: find-by-phone-or-email-or-username.js
 * Path: /app/traits/user/find-by-phone-or-email-or-username.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 6:04:08 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 6:04:08 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const isEmail = require('../../validations/is-valid-email'),
    isPhone = require('../../validations/is-phone'),
    findByEmail = require('../../repositories/user/find-user-by-email'),
    findByPhone = require('../../repositories/user/find-user-by-phone'),
    findByUsername = require('../../repositories/user/find-user-by-username')

/**
 * @description Search user by Username/Email/Phone any one
 * @param String str 
 * @return fn<Promise>
 */
module.exports = (str) => {
    if (isEmail(str))
        return findByEmail(str)
    else if (isPhone(str))
        return findByPhone(str)
    else
        return findByUsername(str)
}