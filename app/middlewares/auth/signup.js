/*
 * File: signup.js
 * Path: /app/middlewares/auth/signup.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 4:19:50 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:36 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const isEmail = require('../../validations/is-valid-email'),
    isPhone = require('../../validations/is-phone'),
    fields = ['name', 'username', 'email', 'phone', 'role_id']

module.exports = (req, res, next) => {

    if (!req.body)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameters required: ${errors.join(', ')}` });

    if (!isEmail(req.body.email))
        return res.send(422, { status: false, message: 'Invalid Email' });

    if (!isPhone(req.body.phone))
        return res.send(422, { status: false, message: 'Invalid Phone' });

    return next();
}