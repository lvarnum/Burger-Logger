// ---------- Dependencies ----------
const orm = require("../config/orm.js");

// ---------- Call ORM Functions ----------
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateOne: function(cols, vals, id, cb) {
        orm.updateOne("burgers", cols, vals, id, (res) => {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", id, cb, (res) => {
            cb(res);
        });
    }
}

// ---------- Export burger Model ----------
module.exports = burger;