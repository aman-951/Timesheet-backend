/*
 * File: reset-password.sql
 * Path: /database/migrations/reset-password.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 9:47:34 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 9:47:35 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `reset_password` (
    `user_id` VARCHAR(50) NOT NULL COMMENT "refrence: users.id",
    `token` VARCHAR(50) NOT NULL COMMENT "uuid",
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB COMMENT 'token to reset-password';