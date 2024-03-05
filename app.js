const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let isLightOn = false;

app.post('/', (req, res) => {
  const { light } = req.body;
  isLightOn = light;
  console.log(`Light is turned ${isLightOn ? 'on' : 'off'}`);
  res.sendStatus(200);
});

app.get('/', function(req, res) {
  console.log("Loading routes from server");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});