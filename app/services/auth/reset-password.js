/*
 * File: reset-password.js
 * Path: /app/services/auth/reset-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 3:53:54 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 3:53:55 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const findByToken = require('../../repositories/forget-password/find-by-token'),
    repository = require('../../repositories/user/update-password'),
    event = require('../../events')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        // search user by username
        findByToken(req.body.token).then(doc => {
            // update password
            repository(doc.user_id, req.body.password).then(resp => {
                // delete remaining token after change of password
                event.emit('changed-password', doc.user_id)

                return resolve({})
            }).catch(err => {
                return reject(err)
            })
        }).catch(err => {
            return reject(err)
        })
    })
}