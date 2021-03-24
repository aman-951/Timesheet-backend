/*
 * File: auth.js
 * Path: /app/middlewares/auth.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 1:35:57 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:34:00 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const verifyToken = require('../helpers/jwt/verify-token'),
    repository = require('../repositories/user/find-by-id'),
    permissions = require('../repositories/role-permission/list-by-role-id');

module.exports = (req, res, next) => {

    const errors = ['authorization'].filter(field => !req.headers[field])

    if (errors.length)
        return res.send(401, { status: false, message: `Header properties required: ${errors.join(', ')}` })

    try {
        token = verifyToken(req.headers.authorization)
    } catch (err) {
        return res.send(401, { status: false, message: err.message })
    }


    // validate Domain and API-KEY
    repository(token.id).then(doc => {
        // set domain detail into request
        req.user = doc
        permissions(doc.role_id).then(roles => {
            req.permissions = roles.map(role => role.key)
            return next()
        }).catch(err => {
            return res.send(403, { status: false, message: 'Not Authorised.' })
        })

    }).catch(err => {
        return res.send(err.code, { status: false, message: err.message })
    })

}