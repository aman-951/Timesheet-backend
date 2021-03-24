/*
 * File: post.js
 * Path: /app/middlewares/role/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 15th January 2021 3:22:09 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:07:26 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const fields = [
    'name'
]

module.exports = (req, res, next) => {
    if (!req.body)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.body[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameter required: ${errors.join(', ')}` });

    return next();
}