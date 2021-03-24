/*
 * File: exists.js
 * Path: /app/file-system/exists.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 2:44:44 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 2:44:44 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const fs = require('fs')

module.exports = (filename) => {
    let exists = fs.existsSync(`${process.env.UPLOAD_DIR}/${filename}`)
    return exists
}