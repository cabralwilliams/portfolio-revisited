require('dotenv').config();
const nodemailer = require('nodemailer');

function formatEmail(emailData) {
    return { plainText: `${emailData.message_text}\n(Return Email: ${emailData.email})`, htmlForm: `<p>${emailData.message_text}</p><p>(Return Email: ${emailData.email})</p>` }; 
}

async function sendEmail(emailObject) {
    //emailObject should be { senderName, email, message_text }
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.ACCOUNT_UNAME,
            pass: process.env.ACCOUNT_PW
        }
    });

    const emailText = formatEmail(emailObject);
    const email = await transporter.sendMail({
        from: `"${emailObject.senderName}" <${process.env.ACCOUNT_UNAME}>`,
        to: "cabral.williams@gmail.com",
        subject: "Portfolio Contact Message",
        text: emailText.plainText,
        html: emailText.htmlForm
    }, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

module.exports = sendEmail;