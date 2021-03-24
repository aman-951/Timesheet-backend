/*
 * File: users.sql
 * Path: /database/migrations/users.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 2:52:20 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:59 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

CREATE TABLE IF NOT EXISTS `users` (
    `id` VARCHAR(50) COMMENT 'uuid as primary-key',
    `name` VARCHAR(191),
    `username` VARCHAR(191) COMMENT 'use as user login',
    `email` VARCHAR(191) COMMENT 'use as user login',
    `phone` VARCHAR(10),
    `password` VARCHAR(191) COMMENT 'encrypted password',
    `role_id` VARCHAR(50) COMMENT 'refrence: roles.id',
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'list of users';