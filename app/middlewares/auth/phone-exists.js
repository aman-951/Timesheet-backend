/*
 * File: phone-exists.js
 * Path: /app/middlewares/auth/phone-exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 1:10:32 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:30 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/user/is-phone-exists')

module.exports = (req, res, next) => {
    repository(req.body.phone.trim()).then(status => {
        if (status)
            return res.send(409, { status: false, message: 'Phone already registered!' });

        return next()
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}