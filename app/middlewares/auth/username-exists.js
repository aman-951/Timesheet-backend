/*
 * File: username-exists.js
 * Path: /app/middlewares/auth/username-exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 29th December 2020 3:12:03 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:42 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/user/is-username-exists')

module.exports = (req, res, next) => {
    repository(req.body.username.trim().toLowerCase()).then(status => {
        if (status)
            return res.send(409, { status: false, message: 'Username already exists!' });

        return next()
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}