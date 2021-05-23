//const { sendMessageInfo } = require('nodemailer/lib/sendmail-transport');
const nodemailer = require('nodemailer');

const options = {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
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
