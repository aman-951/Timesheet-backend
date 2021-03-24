/*
 * File: is-phone.js
 * Path: /app/helpers/is-phone.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:11:34 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:32:55 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

module.exports = (str) => {
    let regex = /^[\d]{10}$/;
    return regex.test(str);
}