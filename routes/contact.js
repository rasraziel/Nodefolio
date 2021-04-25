const router = require("express").Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port: 25,
    auth: {
      user: process.env.LOGIN,
      pass: process.env.PASS
    }
  }));
  

router.post("/contact/message", (req, res) => {

    const mailOptions = {
        from: req.body.email,
        to: 'rasraziel@gmail.com',
        subject: req.body.subject + ' (' + req.body.name + ')',
        text: req.body.message
      };

      transporter.sendMail(mailOptions, (error, info) =>{
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.redirect("/");
});

module.exports = {
    router
};