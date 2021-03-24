/*
 * File: signup.js
 * Path: /app/services/auth/signup.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:52:44 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:25 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const repository = require('../../repositories/user/save'),
    events = require('../../events');

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        repository(req.body).then(doc => {
            events.emit('user-registered', {doc, origin: req.headers.origin})
            return resolve({})
        }).catch(err => {
            return reject(err)
        })
    })
}