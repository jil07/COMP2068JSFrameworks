const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/checkMaintenance', (req, res) => {
  const { oilChange, suspensionBalance, unevenAirPressure } = req.body;

  let maintenanceMessage = 'No specific maintenance needed at the moment.';

  if (oilChange === 'on') {
    maintenanceMessage = 'Your car needs an oil change.';
  }

  if (suspensionBalance === 'on') {
    maintenanceMessage = 'Your car needs a suspension balance.';
  }

  if (unevenAirPressure === 'on') {
    maintenanceMessage = 'The air pressure in your tires is uneven. Consider checking and balancing the pressure for optimal performance.';
  }

  res.send(maintenanceMessage);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
