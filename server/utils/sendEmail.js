//const { sendMessageInfo } = require('nodemailer/lib/sendmail-transport');
const nodemailer = require('nodemailer');

const options = {
  // this for mailtrap
  // host: process.env.NODEMAILER_HOST,
  // port: 25,
  // auth: {
  //   user: process.env.NODEMAILER_USER,
  //   pass: process.env.NODEMAILER_PASS,
  // },
  // secure: false,
  // logger: true,
  // debug: true,
  // ignoreTLS: true,
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
};

const mailer = nodemailer.createTransport(options);

exports.sendEmail = ({ from, to, subject, html, callback }) => {
  mailer.sendMail(
    {
      from,
      to,
      subject,
      html,
    },
    callback ||
      function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      }
  );
};
