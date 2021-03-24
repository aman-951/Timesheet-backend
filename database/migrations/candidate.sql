/*
 * File: candidate.sql
 * Path: /database/migrations/candidate.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 3:46:22 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 3:46:23 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `candidates` (
    `id` VARCHAR(50) COMMENT 'uuid as primary-key',
    `first_name` VARCHAR(50),
    `middle_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `father_name` VARCHAR(191),
    `address` VARCHAR(255),
    `phone` VARCHAR(10),
    `resume` VARCHAR(50) COMMENT 'refrence: files.id',
    `user_id` VARCHAR(50) NOT NULL COMMENT "refrence: users.id",
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'list of candidates';