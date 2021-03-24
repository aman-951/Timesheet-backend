/*
 * File: run-seed.js
 * Path: /database/run-seed.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 14th January 2021 1:46:16 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 14th January 2021 1:46:16 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const fs = require('fs'),
    path = require('path'),
    connection = require('./connection'),
    setPrimaryPermission = require('./seeds/add-admin')

module.exports = function () {
    // find and read all sql files
    fs.readdirSync(path.join(__dirname, 'seeds')).map(file_name => {
        // check if file is sql
        if (file_name.split('.').pop() === 'sql') {
            // get file content
            let sql = fs.readFileSync(path.join(__dirname, 'seeds', file_name), 'utf8').replace(/\n|\r/g, "");
            connection.query(sql, (error, results, fields) => {
                if (error) throw error;
                console.info(`File Name: ${file_name}`, results.serverStatus, results.message);

                // add first admin if permissions are set
                if (file_name === 'permission.sql')
                    setPrimaryPermission(results.affectedRows)
            })
        }
    });

    // disconnect after query 
    // connection.end();
};