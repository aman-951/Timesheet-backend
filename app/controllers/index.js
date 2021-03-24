/*
 * File: index.js
 * Path: /app/controllers/index.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 4:10:24 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:59 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

module.exports = {
    auth: {
        login: require('./auth/login'),
        signup: require('./auth/signup'),
        forgot_password: require('./auth/forgot-password'),
        reset_password: require('./auth/reset-password'),
    },
    upload: {
        post: require('./upload/post'),
        read_file: require('./upload/read-file'),
        view: require('./upload/view')
    },
    candidate: {
        post: require('./candidate/post'),
        list: require('./candidate/list'),
        count: require('./candidate/count'),
        put: require('./candidate/put'),
        view: require('./candidate/view'),
        view_status: require('./candidate/view-status'),
        change_status: require('./candidate/change-status'),
        share: require('./candidate/share')
    },
    user: {
        login_user: require('./user/login-user'),
        list: require('./user/list'),
        view: require('./user/view'),
        count: require('./user/count'),
        chnage_role: require('./user/chnage-role')
    },
    permission: {
        list: require('./permission/list')
    },
    role: {
        post: require('./role/post'),
        permission: require('./role/permission'),
        list: require('./role/list'),
        view: require('./role/view'),
        view_permission: require('./role/view-permission'),
        put: require('./role/put')
    },
    status: {
        post: require('./status/post'),
        list: require('./status/list')
    },
    timesheet: {
        post: require('./timesheet/post'),
        list: require('./timesheet/list'),  
        swipe:  require('./timesheet/swipe'), 
        approval:  require('./timesheet/approval'),   
    }, dailyStatus: {
        post: require('./dailyStatus/post'),
        list: require('./dailyStatus/list'),
        reportingEmployees: require('./dailyStatus/reportingEmployees') 
    }
}