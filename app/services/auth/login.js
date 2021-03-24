/*
 * File: login.js
 * Path: /app/services/auth/login.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:05:48 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:20 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const generateToken = require('../../helpers/jwt/generate-jwt-token'),
    searchUserByMultipleWay = require('../../traits/user/find-by-phone-or-email-or-username')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        // search user by username
        searchUserByMultipleWay(req.body.username).then(doc => {

            // validate password provided by User
            if (req.body.password !== doc.password)
                return reject({ code: 422, message: 'Invalid password' })

            // generate JWT-Token and send
            return resolve({ token: generateToken({ id: doc.id }) })
        }).catch(err => {
            return reject(err)
        })
    })
}