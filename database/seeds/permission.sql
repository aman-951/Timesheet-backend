/*
 * File: permission.sql
 * Path: /database/seeds/permission.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 2:09:52 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 2:15:31 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
INSERT INTO `permissions`(`key`, `description`) VALUES
    ('LIST_USER', 'user can see list of users'),
    ('ADD_USER', 'user can register a new user'),
    ('VIEW_USER', 'user can view another user'),
    ('UPDATE_USER', 'user can update another user'),
    ('DELETE_USER', 'user can see list of users'),
    ('UPDATE_USER_ROLE', 'user can update another user'),

    ('ADD_ROLE', 'user can create a role'),
    ('ASSIGN_PERMISSION_TO_ROLE', 'assign permission to role'),

    ('LIST_CANDIDATE', 'user can see list of candidates'),
    ('ADD_CANDIDATE', 'user can register a new candidate'),
    ('VIEW_CANDIDATE', 'user can view another candidate'),
    ('UPDATE_CANDIDATE', 'user can update another candidate'),
    ('DELETE_CANDIDATE', 'user can see list of candidate')
    