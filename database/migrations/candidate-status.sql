/*
 * File: candidate-status.sql
 * Path: /database/migrations/candidate-status.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 1:18:09 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 1:18:09 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `candidate_status` (
    `candidate_id` VARCHAR(50) COMMENT 'refrence: candidates.id',
    `status_id` VARCHAR(50) NOT NULL COMMENT "refrence: status.id",
    `user_id` VARCHAR(50) NOT NULL COMMENT "refrence: users.id",
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB COMMENT 'status candidate application';