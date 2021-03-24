/*
 * File: index.js
 * Path: /app/middlewares/index.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 4:10:30 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:34:08 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

module.exports = {
    auth: {
        login: require('./auth/login'),
        signup: require('./auth/signup'),
        emailExists: require('./auth/email-exists'),
        phoneExists: require('./auth/phone-exists'),
        usernameExists: require('./auth/username-exists'),
        forgot_password: require('./auth/forgot-password'),
        reset_password: require('./auth/reset-password'),
    },
    candidate: {
        post: require('./candidate/post'),
        share: require('./candidate/share')
    },
    upload: {
        post: require('./upload/post')
    },
    role: {
        post: require('./role/post'),
        permission: require('./role/permission'),
        roleExists: require('./role/role-exists'),
    },
    status: {
        post: require('./status/post')
    },
    timesheet: {
        post: require('./timesheet/post')
    }

}