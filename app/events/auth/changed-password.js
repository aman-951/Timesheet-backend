/*
 * File: changed-password.js
 * Path: /app/events/auth/changed-password.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Wednesday, 13th January 2021 7:12:44 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Wednesday, 13th January 2021 7:12:45 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */
const EMAIL_SUBJECT = 'Recruitment-PORT: Password changed',
    sendEmail = require('../../libs/email/send'),
    findUserById = require('../../repositories/user/find-by-id'),
    removeChangePasswordRequestOfUser = require('../../repositories/forget-password/delete-by-user-id')

/**
 * Send Email to user after password-changed
 * @param String user-id
 */
module.exports = (user_id) => {
    // delete all request to change user
    removeChangePasswordRequestOfUser(user_id).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(`Unable to delete record on passwo-changed`, err.message);
    })


    findUserById(user_id).then(user => {
        sendEmail(user.email, EMAIL_SUBJECT, 'Your password has succesfully changed.').then(resp => {
            console.log(resp);
        }).catch(err => {
            console.error(`Email Error occur`);
            console.log(err);
        })
    }).catch(err => {
        console.error(`Unable to send Email to user on change password`, err.message);
    })
}