import nodemailer from 'nodemailer';
import { objectConfig } from '../config/index.js';

const { gmail_pass, gmail_user } = objectConfig;

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: gmail_user,
        pass: gmail_pass
    }

})

export const sendEmail = async (email, subject, html ) => {    
    return await transport.sendMail({
        from: 'System Info - eWine <hernan.carballo77@gmail.com>',
        to: email,
        subject,
        html,
        // attachments: [{
        //     filename: '',
        //     path: '',
        //     cid: ''
        // }]
    })
}