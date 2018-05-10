const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!',
  });
});

app.post('/register', (req, res) => {
  res.send({
    message: `${req.body.email} registered!`,
  });
});

app.listen(process.env.PORT || 8000);
