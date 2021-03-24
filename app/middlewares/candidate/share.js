/*
 * File: share.js
 * Path: /app/middlewares/candidate/share.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 3:17:02 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:06:51 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const fields = ['email'],
    validateEmail = require('../../validations/is-valid-email')

module.exports = (req, res, next) => {
    if (!req.body)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameter required: ${errors.join(', ')}` });

    if (!validateEmail(req.body.email))
        return res.send(422, { status: false, message: `Invalid Email format` });

    return next();
}

