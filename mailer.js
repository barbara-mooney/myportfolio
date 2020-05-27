require('dotenv').config();
var nodemailer = require('nodemailer');

module.exports = (request) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: `${request.body.email}`,
        to: process.env.SENDTO,
        subject: `New message from ${request.body.name}`,
        text: `Message body\n-------------\n${request.body.message}`
    };

    //use the transporter to send a message with the specified settings
    transporter.sendMail(mailOptions, (err, res) => {
        console.log('mail sent')
    });

    return true;
}