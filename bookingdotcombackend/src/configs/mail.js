const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2c9113c600bae9",
    pass: "5b044a70e37a47",
  },
});

module.exports = transport;
