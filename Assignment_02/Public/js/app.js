const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Replace these values with  user info
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'user-email@gmail.com',
    pass: 'user-email-password',
  },
});

