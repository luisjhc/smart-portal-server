const nodemailer = require("nodemailer");

function emailMessage(username, password) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: sans-serif;
      }
      p {
        margin: 2rem auto 0;
        text-align: center;
        max-width: 100ch;
      }
      h1,
      footer {
        text-align: center;
      }
      footer {
        margin-top: 2rem;
        background: #000;
        color: white;
        padding: 1.5rem;
      }
    </style>
  </head>
  <body>
    <h1>WELCOME TO SMART PORTAL</h1>
    <p>
      Hello student, your account has been created in smart portal.
      You can log in <a href="http://localhost:3000/auth/login">here</a>, using your credentials:
      <br>
      username: ${username}
      <br>
      password: ${password}
    </p>
    <p>
    Please, remember to change the password in your profile.
    </p>
    <footer>SMART PORTAL</footer>
  </body>
</html>
`;
}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAILUSER, // generated ethereal user
    pass: process.env.MAILPASS, // generated ethereal password d9h4GcR?o3$rp5#i
  },
});

function sendEmail(user, password) {
  return transporter
    .sendMail({
      from: '"SMART PORTAL" process.env.MAILUSER',
      //to: "smartportalapp@gmail.com",
      to: user.email,
      subject: "Your account at Smart Portal",
      text: "Hello world?",
      html: emailMessage(user.username, password),
    })
    .catch((err) => {
      console.log("err:", err);
    });
}

module.exports = sendEmail;
