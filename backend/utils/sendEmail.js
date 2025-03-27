const nodemailer = require('nodemailer');
require('dotenv').config(); 

const sendEmail = async (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT), // Convert port to a number
            secure: false, // Use `true` for port 465 (SSL), `false` for 587/2525
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS
            }
        });

        await transporter.sendMail({
            from: '"Admin Support" <support@example.com>',
            to, 
            subject,
            html
        });

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Email sending error:', error);
        throw new Error('Error sending email');
    }
};

module.exports = sendEmail;
