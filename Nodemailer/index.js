// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj'
    }
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('please enter your mail ', (userEmail) => {
    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: userEmail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!'
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log('Error occurred: ', error);
      } else {
        console.log('Success : Email sent to ', userEmail);
      }
      rl.close();
    });
  });
};

export default Solution;
