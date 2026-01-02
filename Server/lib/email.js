import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });




    // 2. Define options


    const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: options.email,
            subject: options.subject,
            text: options.message,
            html: options.html,
    };

    // 3. Send
    await transporter.sendMail(mailOptions);
};

export default sendEmail;
