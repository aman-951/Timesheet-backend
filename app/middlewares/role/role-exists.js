/*
 * File: role-exists.js
 * Path: /app/middlewares/role/role-exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 3:25:26 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:07:35 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/role/is-name-exists')

module.exports = (req, res, next) => {
    repository(req.body.name.trim().toLowerCase()).then(status => {
        if (status)
            return res.send(409, { status: false, message: 'Role already exists!' });

        return next()
    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })
}