const mailer = require("../backend/src/services/mailer");

mailer.sendMail(
  {
    from: "myname@wildcodeschool.com",
    to: "my-personnal-email@gmail.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
