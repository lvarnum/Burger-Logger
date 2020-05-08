// ---------- Dependencies ----------
const mysql = require("mysql");

// ---------- MYSQL Connection ----------
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "TuckEverlasting8", // Your specific password
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// ---------- Export Connection for ORM ----------
module.exports = connection;