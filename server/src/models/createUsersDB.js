const sql = require('sqlite3').verbose();

var db = new sql.Database("users.db");
db.serialize(create);

function create() {
    db.run("create table users (Id, Name, Email, Password)");
}