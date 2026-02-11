const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sujet2",
});

db.connect((err) => {
  if (err) {
    console.error("😵Erreur MySQL :", err);
  } else {
    console.log("👌🏽 MySQL connecté (sujet2)");
  }
});

module.exports = db;
