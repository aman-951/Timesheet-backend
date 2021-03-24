/*
 * File: read-file.js
 * Path: /app/controllers/upload/read-file.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 1:01:28 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:03:00 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const service = require('../../services/upload/read-file')

module.exports = (req, res) => {
    service(req.params.id).then(file => {
        res.writeHead(200, { 'Content-Type': file.type });
        return res.end(file.file, 'binary');
    })
}