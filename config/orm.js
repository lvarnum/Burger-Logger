// ---------- Dependencies ----------
const connection = require("./connection.js");

// ---------- Set-Up ORM Methods ----------
const orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, values, cb) {
        var query = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(query, [table, cols, values], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, cols, value, id, cb) {
        var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(query, [table, cols, value, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

// ---------- Export ORM ----------
module.exports = orm;