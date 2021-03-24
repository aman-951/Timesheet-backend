/*
 * File: has-permission.js
 * Path: /app/middlewares/has-permission.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 19th January 2021 8:39:39 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:07:55 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

module.exports = (permissions) => {
    return (req, res, next) => {
        if (!req.permissions.includes(permissions))
            return res.send(403, { status: false, message: 'permission denied' })
        return next()
    }
}