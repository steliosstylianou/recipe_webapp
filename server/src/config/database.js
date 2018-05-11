const sql = require('sqlite3').verbose();
const config = require('./config');

let db = new sql.Database(config.db,
    sql.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the user database.');
    });
module.exports = db;