/*
 * File: post.js
 * Path: /app/middlewares/upload/post.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Thursday, 31st December 2020 9:52:19 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 31st December 2020 10:33:54 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2020 Offshore, Offshore, Ludhiana Punjab
 */

 module.exports = (req, res, next) => {
    if (!req.files || !req.files.file)
        return res.send(412, { status: false, message: `"file" required` })

    return next()
}