const sql = require('sqlite3').verbose();

let db = new sql.Database('users.db',
    sql.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the user database.');
        db.serialize(search());
    });


function create() {
    db.run("create table users (Id, Name, Email, Password)");
}
function search(){
    console.log("OUT")

    var rows = db.all('SELECT * FROM users');
}
