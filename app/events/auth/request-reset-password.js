/*
 * File: request-reset-password.js
 * Path: /app/events/auth/request-reset-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 9:45:20 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 9:45:20 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const EMAIL_SUBJECT = 'Recruitment-PORT: Forget Password',
    sendEmail = require('../../libs/email/send')

/**
 * Send Email to user on request of forget-password
 * @param Object params 
 * @example {to: String (Email), token: String}
 */
module.exports = (params) => {
    let html = `<p>
            <a href="${params.origin}/reset-password/${params.token}">
                Click here to reset your Password
            </a>
        </p>`

    sendEmail(params.to, EMAIL_SUBJECT, params.token, html).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(`Email Error occur`);
        console.log(err);
    })
}