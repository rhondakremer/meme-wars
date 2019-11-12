var nodemailer = require("nodemailer");
var http = require('http');
var fs = require('fs');

module.exports = function(app) {
  app.post("/email/send", function(req, res) {
    var transporter = nodemailer.createTransport({
      service: req.body.serviceInput,
      auth: {
        user: req.body.email,
        pass: req.body.password
      }
    });

    var mailOptions = {
      from: req.body.email,
      to: "rhondakremer@gmail.com",
      subject: "It's a meme off!",
      text:  "You've been challenged to a meme off",
      attachments: [
        {
            filename: 'walkOff.txt',
            path: 'http://giphygifs.s3.amazonaws.com/media/K2hWvw8FEava8/giphy.gif'
        }
      ]
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send("email sent");
      }
    });
  });
};