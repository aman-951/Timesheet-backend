/*
 * File: files.sql
 * Path: /database/migrations/files.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 31st December 2020 10:20:43 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:50 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

CREATE TABLE IF NOT EXISTS `files` (
    `id` VARCHAR(50) COMMENT 'uuid as primary-key',
    `name` VARCHAR(191) COMMENT 'origional name of the file',
    `upload_name` VARCHAR(191) COMMENT 'name of the file at time of upload (unique and UUID)',
    `type` VARCHAR(100) COMMENT 'mime type of the file-uploaded',
    `size` INT UNSIGNED DEFAULT 0 COMMENT 'size of the uploaded file in bytes',
    `user_id` VARCHAR(50) NOT NULL COMMENT "refrence: users.id",
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'list of files uploaded';