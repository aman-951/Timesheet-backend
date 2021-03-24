/*
 * File: forgot-password.js
 * Path: /app/middlewares/auth/forgot-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 5:22:15 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 5:22:15 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const fields = ['username']

module.exports = (req, res, next) => {
    if (!req.body)
        return res.send(422, { status: false, message: `parameter required: ${fields.join(', ')}` });

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `parameter required: ${errors.join(', ')}` });

    return next()
}