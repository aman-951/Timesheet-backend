/*
 * File: post.js
 * Path: /app/middlewares/candidate/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 3:53:40 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:06:57 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const fields = [
    'first_name',
    'last_name', 'father_name',
    'address', 'phone', 'resume'
], validatePhone = require('../../validations/is-phone')

module.exports = (req, res, next) => {
    if (!req.body)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameter required: ${errors.join(', ')}` });

    if (!validatePhone(req.body.phone))
        return res.send(422, { status: false, message: `Invalid Phone format` });

    return next();
}