const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const multer = require('multer');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.listen(config.port);

console.log('Server started on port ' + config.port);
