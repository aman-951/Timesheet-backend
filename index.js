/*
 * File: index.js
 * Path: /index.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 24th December 2020 2:48:03 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:36:27 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

const restify = require('restify'),
    server = restify.createServer(),
    cors = require('./cors');

server.pre(cors);

require('dotenv').config()

server.use(restify.plugins.bodyParser({ mapParams: false }));
server.use(restify.plugins.queryParser({allowDots: true, parseArrays: true, mapParams: true}))

require('./app/routes')(server)

server.listen(process.env.PORT, () => {
    console.info(`Server is running on port ${process.env.PORT}`);
});