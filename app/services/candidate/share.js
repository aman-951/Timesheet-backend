/*
 * File: share.js
 * Path: /app/services/candidate/share.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 3:19:45 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:11:05 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const events = require('../../events')

module.exports = (req) => {
    return new Promise((resolve) => {
        events.emit('share-candidate-application', {
            email: req.body.email,
            shared_by: req.user.name,
            link: `${req.headers.origin}/candidates/${req.params.id}`
        })
        return resolve({})
    })
}