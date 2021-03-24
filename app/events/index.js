/*
 * File: index.js
 * Path: /app/events/index.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 9:42:32 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 9:42:32 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const event = require('events'),
    eventEmitter = new event.EventEmitter()

eventEmitter.on('request-reset-password', require('./auth/request-reset-password'))
eventEmitter.on('changed-password', require('./auth/changed-password'))

eventEmitter.on('share-candidate-application', require('./candidate/share'))
eventEmitter.on('user-registered', require('./user/registered'))

module.exports = eventEmitter