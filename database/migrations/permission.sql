/*
 * File: permission.sql
 * Path: /database/migrations/permission.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 12:43:58 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 12:43:58 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `permissions` (
    `id` INT(6) NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'primary-key',
    `key` VARCHAR(50) COMMENT "Unique key of permission",
    `description` VARCHAR(255) COMMENT "meaning of permission"
) ENGINE=InnoDB COMMENT 'It is master table. it can not be altered.';