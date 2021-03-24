/*
 * File: login.js
 * Path: /app/middlewares/auth/login.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 4:19:45 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:24 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

module.exports = (req, res, next) => {
    const fields = ['username', 'password']

    if (!req.body)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameter required: ${errors.join(', ')}` });

    return next();
}