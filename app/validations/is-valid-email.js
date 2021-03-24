/*
 * File: is-valid-email.js
 * Path: /app/helpers/is-valid-email.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 12:10:01 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:04 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

 module.exports = (str) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(str);
}