// ---------- Dependencies ----------
const express = require("express");
const burger = require("../models/burger.js");

// ---------- Create Router ----------
const router = express.Router();

// ---------- Create Router Paths ----------
router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", (req, res) => {

})
// ---------- Export Router ----------
module.exports = router;