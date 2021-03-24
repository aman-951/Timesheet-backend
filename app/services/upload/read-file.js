/*
 * File: fetch.js
 * Path: /app/services/upload/fetch.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Friday, 1st January 2021 2:23:10 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Friday, 1st January 2021 2:23:10 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const repository = require('../../repositories/file/find-by-id'),
    readFile = require('../../file-system/read'),
    fileExists = require('../../file-system/exists')

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        repository(id).then(async (doc) => {
            return resolve({ file: await readFile(doc.upload_name), type: doc.type })
        }).catch(async (err) => {
            let filename = process.env.DEFAULT_IMG,
                type = 'image/png'
            return resolve({ file: await readFile(filename), type })
        })
    })
}