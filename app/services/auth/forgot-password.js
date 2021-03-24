/*
 * File: forgot-password.js
 * Path: /app/services/auth/forgot-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 6:03:09 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 6:03:10 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const searchUserByMultipleWay = require('../../traits/user/find-by-phone-or-email-or-username'),
    repository = require('../../repositories/forget-password/insert'),
    event = require('../../events')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        // search user by username
        searchUserByMultipleWay(req.body.username).then(doc => {
            repository({ user_id: doc.id }).then(resp => {

                // send Email
                event.emit('request-reset-password', {
                    to: doc.email,
                    token: resp.token,
                    origin: req.headers.origin
                })

                return resolve({})
            })
        }).catch(err => {
            return reject(err)
        })
    })
}