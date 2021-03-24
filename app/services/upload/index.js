/*
 * File: index.js
 * Path: /app/services/upload/index.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 31st December 2020 9:56:25 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:35:32 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const upload = require('../../file-system/upload'),
    repository = require('../../repositories/file/insert')

module.exports = async (req) => {
    let uploadedFile = await upload(req.files.file)
    uploadedFile.user_id = req.user.id

    // save file record into DB
    return new Promise((resolve, reject) => {
        repository(uploadedFile).then(doc => {
            return resolve({ id: doc.id })
        }).then(err => {
            return reject(err)
        })
    })
}