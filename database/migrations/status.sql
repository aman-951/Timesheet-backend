/*
 * File: status.sql
 * Path: /database/migrations/status.sql
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 1:15:37 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 1:15:37 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
CREATE TABLE IF NOT EXISTS `statuses` (
    `id` VARCHAR(50) COMMENT 'uuid as primary-key',
    `name` VARCHAR(50) COMMENT "name/title of ecruitment-status",
    `description` VARCHAR(255) COMMENT "description about recruitment status"
) ENGINE=InnoDB COMMENT 'Status of the recruitment';