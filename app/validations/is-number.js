/*
 * File: is-number.js
 * Path: /app/validations/is-number.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 11:38:48 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 11:38:48 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

/**
 * @description Check if string is number or not
 * @param Str value 
 * @returns Boolean
 */
module.exports = (value) => {
    return /^-?\d+$/.test(value);
}