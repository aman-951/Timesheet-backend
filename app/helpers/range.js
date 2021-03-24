/*
 * File: range.js
 * Path: /app/helpers/range.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Sunday, 17th January 2021 2:17:37 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Sunday, 17th January 2021 2:17:38 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

/**
 * @description develop range functionality
 * 
 * @param Number start 
 * @param Number end 
 * 
 * @return Array
 */
module.exports = (start, end) => {
    return [...Array(end + 1).keys()].filter(value => end >= value && start <= value)
}