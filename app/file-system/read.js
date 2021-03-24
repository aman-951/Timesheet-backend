/*
 * File: read.js
 * Path: /app/file-system/read.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 2:38:06 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 2:38:07 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const fs = require('fs')

module.exports = (filename) => {
    let file = fs.readFileSync(`${process.env.UPLOAD_DIR}/${filename}`);
    return file
}