const db = require("./db");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 Backend SUJET2 is running!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(` Serveur lancé sur http://localhost:${PORT}`);
});
