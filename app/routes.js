/*
 * File: routes.js
 * Path: /app/routes.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 4:05:15 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:38 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const middleware = require('./middlewares'),
    controller = require('./controllers'),
    auth = require('./middlewares/auth'),
    pagination = require('./middlewares/pagination'),
    permit = require('./middlewares/has-permission'),
    trim_req = require('./libs/request/trim')

module.exports = (server) => {

    // trim request parameter
    server.use(trim_req)

    /**
     * @description root of the rouing
     *  check if server is runing or not
     */
    server.get('/', (req, res) => {
        return res.send(200, { status: true, message: 'Server is running', data: { documentation_url: process.env.DOCUMENTATION_URL } })
    })

    /**
     * @description register new User
     * @date Dec-31-2020
     */
    server.post('/users',
        auth,
        permit('ADD_USER'),
        middleware.auth.signup,
        middleware.auth.usernameExists,
        middleware.auth.emailExists,
        middleware.auth.phoneExists,
        controller.auth.signup
    );

    /**
     * @description Login user (generate JT Token)
     * @date Dec-31-2020
     */
    server.post('/login', middleware.auth.login, controller.auth.login);

    /**
     * @description Get login user detail
     * @date Jan-12-2020
     */
    server.get('/user', auth, controller.user.login_user);

    /**
     * @description Upload file
     */
    server.post('/uploads', auth, middleware.upload.post, controller.upload.post)

    /**
     * @description read and view uploaded file
     */
    server.get('/uploads/:id/files', controller.upload.read_file)

    /**
     * @description view file uploaded detail
     */
    server.get('/uploads/:id', auth, controller.upload.view)

    /**
     * @description Send Email to user in case he forget his passord
     */
    server.post('/forgot-password', middleware.auth.forgot_password, controller.auth.forgot_password)

    /**
     * @description Reset Password of the user
     */
    server.post('/reset-password', middleware.auth.reset_password, controller.auth.reset_password)

    /**
     * @description list users
     */
    server.get('/users', auth, permit('LIST_USER'), pagination, controller.user.list)

    /**
     * @description Count number of registered users
     */
    server.get('/users/count', auth, controller.user.count)

    /**
     * @description list users
     */
    server.get('/users/:id', auth, controller.user.view)

    /**
     * @description update user-role
     */
    server.put('/users/:id/role', auth, permit('VIEW_USER'), controller.user.chnage_role)

    /**
     * @description add new candidate
     */
    server.post('/candidates', auth, permit('ADD_CANDIDATE'), middleware.candidate.post, controller.candidate.post)

    /**
     * @description List candidates with pagination
     */
    server.get('/candidates', auth, permit('LIST_CANDIDATE'), pagination, controller.candidate.list)

    /**
     * @description Count number of registered candidates
     */
    server.get('/candidates/count', auth, controller.candidate.count)

    /**
     * @description Update candidate detail
     */
    server.put('/candidates/:id', auth, permit('UPDATE_CANDIDATE'), controller.candidate.put)

    /**
     * @description Update candidate detail
     */
    server.post('/candidates/:id/share', auth, middleware.candidate.share, controller.candidate.share)

    /**
     * @description get detail of candidate by id
     */
    server.get('/candidates/:id', auth, permit('VIEW_CANDIDATE'), controller.candidate.view)

    /**
     * @description get detail of candidate by id
     */
    server.get('/candidates/:id/status', auth, controller.candidate.view_status)

    /**
     * @description get detail of candidate by id
     */
    server.put('/candidates/:id/status', auth, controller.candidate.change_status)

    /**
     * @description get detail of candidate by id
     */
    server.get('/permissions', auth, controller.permission.list)

    /**
     * @description Add new Role
     */
    server.post('/roles', auth, middleware.role.post, middleware.role.roleExists, controller.role.post)

    /**
     * @description Add new Role
     */
    server.get('/roles', auth, controller.role.list)

    /**
     * @description Add new Role
     */
    server.get('/roles/:id', auth, controller.role.view)

    /**
     * @description Add new Role
     */
    server.put('/roles/:id', auth, middleware.role.post, controller.role.put)

    /**
     * @description list permissin belongs to role
     */
    server.get('/roles/:id/permissions', auth, controller.role.view_permission)

    /**
     * @description assign/update permission to role
     */
    server.put('/roles/:id/permissions', auth, middleware.role.permission, controller.role.permission)

    /**
     * @description add new candidate-application's status
     */
    server.post('/statuses', auth, middleware.status.post, controller.status.post)

    /**
     * @description add new candidate-application's status
     */
    server.get('/statuses', auth, pagination, controller.status.list)

   
    
     /**
     * @description add timesheet for a week
     */
    server.post('/timesheet', auth, permit('ADD_CANDIDATE'), controller.timesheet.post)
     /**
     * @description get timesheet for a week
     */
    server.get('/timesheet', auth, permit('LIST_CANDIDATE'), controller.timesheet.list)
     /**
     * @description get timesheet for a week
     */
    server.get('/swipe', auth, permit('LIST_CANDIDATE'), controller.timesheet.swipe)
     /**
     * @description get timesheet for a week
     */
    server.get('/approvalList', auth, permit('LIST_CANDIDATE'), controller.timesheet.approval)
    /**
     * @description get timesheet for a week
     */
    server.post('/dailyStatus', auth, permit('LIST_CANDIDATE'), controller.dailyStatus.post)
     /**
     * @description get timesheet for a week
     */
    server.get('/dailyStatus', auth, permit('LIST_CANDIDATE'), controller.dailyStatus.list)
    /**
     * @description get timesheet for a week
     */
    server.get('/reportingEmployees', auth, permit('LIST_CANDIDATE'), controller.dailyStatus.reportingEmployees)


}