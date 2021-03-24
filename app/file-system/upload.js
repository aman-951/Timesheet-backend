/*
 * File: upload.js
 * Path: /app/file-system/upload.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 31st December 2020 9:58:15 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:32:42 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const fs = require('fs'),
    uuid = require('uuid-random')

module.exports = (file) => {
    const extension = file.name.split('.').pop(),
        name = `${uuid()}.${extension}`;

    try {
        fs.writeFileSync(`${process.env.UPLOAD_DIR}/${name}`, fs.readFileSync(file.path))
        fs.unlinkSync(file.path)
    } catch (err) {
        throw new Error(`File upload Error: ${err.message}`)
    }

    return {
        name: file.name,
        upload_name: name,
        type: file.type,
        size: file.size
    }
}