/*
 * File: email-exists.js
 * Path: /app/middlewares/auth/email-exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 1:04:51 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:17 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/user/is-email-exists')

module.exports = (req, res, next) => {
    repository(req.body.email.trim().toLowerCase()).then(status => {
        if (status)
            return res.send(409, { status: false, message: 'Email already registered!' });

        return next()
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}