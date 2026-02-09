const express = require("express");
console.log("🔥 USERS ROUTE CHARGÉE");

const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT id, nom, email FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;
