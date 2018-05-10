const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.listen(process.env.PORT || 8000);

console.log('Server started on port 8000');

db.all('SELECT Name FROM users', function(err, rows) {
    rows.forEach(function(row) {
        console.log(row.Name);
    });
});
