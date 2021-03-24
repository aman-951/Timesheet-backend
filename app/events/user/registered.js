/*
 * File: registered.js
 * Path: /app/events/user/registered.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Monday, 18th January 2021 4:34:16 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 19th January 2021 10:05:35 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

const EMAIL_SUBJECT = 'Recruitment-PORT: User registered.',
    sendEmail = require('../../libs/email/send'),
    repository = require('../../repositories/forget-password/insert')

/**
 * Send Email to user after registration to set password
 * @param Object param
 */
module.exports = (params) => {
    repository({user_id: params.doc.id}).then(resp => {
        let html = `
            Dear ${params.doc.name}, <br/>
            Your registration in recruitment portal has done. please set your password by click on below link:
            <a href="${params.origin}/reset-password/${resp.token}">Reset Password</a>
        `

        sendEmail(params.doc.email, EMAIL_SUBJECT, 'user registered', html).then(res => {
            console.log(res);
        }).catch(err => {
            console.log('I am Email error', err);
        })
    }).catch(err => {
        console.log('Registration Error', err.message);
    })
}
