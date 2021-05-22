//const { sendMessageInfo } = require('nodemailer/lib/sendmail-transport');
const mailer = require('./mailer');

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
