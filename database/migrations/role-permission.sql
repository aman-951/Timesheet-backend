/*
 * File: role-permission.sql
 * Path: /database/migrations/role-permission.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 12:54:13 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 12:54:13 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `role_permissions` (
    `role_id` VARCHAR(50) COMMENT 'refrence: roles.id',
    `permission_id` INT(6) UNSIGNED COMMENT 'refrence: permissions.id',
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'assign a role to user with permissions.';