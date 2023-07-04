/* eslint-disable */
const mailer = require("./src/services/mailer");

mailer.sendMail(
  {
    from: "hhanocq@gmail.com",
    to: "hhanocq@gmail.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
