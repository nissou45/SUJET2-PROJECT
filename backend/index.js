require("dotenv").config();

const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Sujet2 OK");
});

app.use("/users", usersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
