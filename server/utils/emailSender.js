const nodemailer = require("nodemailer");

exports.sendMail = async (option) => {
  // create a transport object
  const transporter = nodemailer.createTransport({
    // service = 'gmail',
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // data
  const mailOptions = {
    from: `${option.name} <${option.email}>`,
    to: process.env.YOUR_EMAIIL,
    subject: `Contact Us Form- ${option.subject}`,
    html: option.message,
  };

  await transporter.sendMail(mailOptions);

  // callback
  // transporter.sendMail(mailOptions, (err, response) => {
  //     if (err) {
  //         console.log(err);
  //     }
  // })
};
