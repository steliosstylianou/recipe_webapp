const sql = require('sqlite3').verbose();
let db = new sql.Database('./src/models/users.db',
    sql.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the user database.');
    });
module.exports = db;