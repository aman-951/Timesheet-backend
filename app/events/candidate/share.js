/*
 * File: share.js
 * Path: /app/events/candidate/share.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 3:51:15 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:05:28 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const EMAIL_SUBJECT = 'Recruitment-PORT: Candidate Application',
    sendEmail = require('../../libs/email/send')

/**
 * Send Email to user after password-changed
 * @param Object param
 *  @example { email: STRING, shared_by: STRING, link: STRING }
 */
module.exports = (params) => {
    let html = `<p><b>${params.shared_by}</b> share a candidate application with you. Click below lik t view it: </p><a href="${params.link}">Click Here</a>`
    
    sendEmail(params.email, EMAIL_SUBJECT, 'share request', html).then(res => {
        console.log(res);
    }).catch(err => {
        console.log('I am Email error', err);
    })
}
