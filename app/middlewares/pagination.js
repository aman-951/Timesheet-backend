/*
 * File: pagination.js
 * Path: /app/middlewares/pagination.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 11:44:22 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:44:22 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const fields = ['limit', 'page'],
    isNumber = require('../validations/is-number')

module.exports = (req, res, next) => {
    if (!req.params)
        return res.send(422, { status: false, message: `Parameter required: ${fields.join(', ')}` })

    const errors = fields.filter(field => !req.params[field])

    if (errors.length)
        return res.send(422, { status: false, message: `Parameter required: ${errors.join(', ')}` });

    if (!isNumber(req.params.limit) || !isNumber(req.params.page))
        return res.send(422, { status: false, message: `'limit' and 'page' must be number` });

    return next();
}