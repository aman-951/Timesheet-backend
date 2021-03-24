/*
 * File: connection.js
 * Path: /database/connection.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 2:50:34 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:36:07 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

require('dotenv').config()
const mysql = require('mysql'),
    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: '3306',
        connectTimeout: 1000,
        canRetry: true,
        multipleStatements: true,
        dateStrings: true
    });

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;