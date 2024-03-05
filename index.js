const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

let isLightOn = false;

app.post('/turnOn', (req, res) => {
  isLightOn = true;
  console.log("Light is turned on");
  res.sendStatus(200);
});

app.post('/turnOff', (req, res) => {
  isLightOn = false;
  console.log("Light is turned off");
  res.sendStatus(200);
});

app.get('/status', (req, res) => {
  res.json(isLightOn); // Trả về giá trị isLightOn (true hoặc false)
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
