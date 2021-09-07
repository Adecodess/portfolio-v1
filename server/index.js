const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const { sendMail } = require('./utils/emailSender');
const { eMessage } = require('./utils/emailTemplate');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors());

app.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    if (!name || !email || !subject || !message)
      return res.json('Incomplete data');

    await sendMail({
      name,
      email,
      subject,
      message: await eMessage(name, email, subject, message),
    });
    res.status(201).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'email not sent' });
  }
});

app.listen(PORT, () => {
  console.log('server running on port', `${PORT}`);
});
