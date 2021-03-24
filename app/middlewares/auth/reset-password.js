/*
 * File: reset-password.js
 * Path: /app/middlewares/auth/reset-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 3:46:21 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 3:46:21 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const fields = ['token', 'password']

module.exports = (req, res, next) => {
    if (!req.body)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameter required: ${errors.join(', ')}` });

    return next();
}