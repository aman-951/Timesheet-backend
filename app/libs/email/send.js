/*
 * File: send.js
 * Path: /app/libs/email/send.js
 * Project: Offshore: Recruitment Portal API
 * File Created: Tuesday, 12th January 2021 8:36:12 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Tuesday, 12th January 2021 8:36:12 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2020 - 2021 Offshore, Offshore, Ludhiana Punjab
 */

/**
 * @plugin https://www.npmjs.com/package/emailjs
 * @description send Email to user
 * @returns Promise
 */
const nodemailer = require("nodemailer"),
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER, // generated ethereal user
            pass: process.env.SMTP_PASSWORD, // generated ethereal password
        },
    })

module.exports = (to, subject, text = null, html = null) => {
    return transporter.sendMail({
        from: `${process.env.APP_NAME} <${process.env.SMTP_USER}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}