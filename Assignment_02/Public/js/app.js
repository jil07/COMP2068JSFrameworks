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

app.post('/checkAirPressure', async (req, res) => {
    const { carId, airPressure } = req.body;
  
    // Replace this API endpoint with a real service for air pressure checking
    const airPressureCheckURL = 'https://silca.cc/pages/sppc-form';
  
    try {
      // Assuming the external service returns a JSON object with { status: 'ok' } on success
      const response = await axios.post(airPressureCheckURL, { carId, airPressure });
      if (response.data.status === 'ok') {
        // Air pressure is fine
        res.send('Air pressure is okay.');
      } else {
        // Air pressure is uneven, notify the user
        sendNotification();
        res.send('Uneven air pressure. Notification sent.');
      }
    } catch (error) {
      console.error('Error checking air pressure:', error.message);
      res.status(500).send('Error checking air pressure.');
    }
  });


