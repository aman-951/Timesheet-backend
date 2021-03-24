/*
 * File: role.sql
 * Path: /database/migrations/role.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 12:43:03 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 12:43:21 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `roles` (
    `id` VARCHAR(50) COMMENT 'uuid as primary-key',
    `name` VARCHAR(50) COMMENT "name of the role",
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'assign a role to user with permissions.';