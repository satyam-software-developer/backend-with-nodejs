// 1. import nodemailer
const nodemailer = require('nodemailer');

// 2. Configure email and send it.

async function sendMail(){

// 1. Create an email transporter.
// SMTP (Simple Mail Transfer Protocol)
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kr.satyam0506@gmail.com',
        pass:'tmjl qjjj wbwh palb'
    }
}); 

//2. Configure email content
const mailOptions = {
    from: 'kr.satyam0506@gmail.com',
    to: 'kr.satyam8310@gmail.com',
    subject: 'Welcome to NodeJS App',
    text: 'This is an email using nodemailer in NodeJS',
};

// 3. Send the email
try{
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
}catch(err){
    console.log('Email send failer with error: '+ err);
}
}

sendMail();