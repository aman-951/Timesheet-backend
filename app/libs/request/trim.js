/*
 * File: trim.js
 * Path: /app/libs/request/trim.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 20th January 2021 2:36:44 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 20th January 2021 3:06:12 am
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const trim_req = require('../../helpers/trim-obj')

module.exports = (req, res, next) => {

    // check for params in body
    if (req.body)
        trim_req(req.body)

    // check for params in route-url-param
    if (req.params)
        trim_req(req.params)

    // check for params in query-param
    if (req.query)
        trim_req(req.query)

    return next()
}