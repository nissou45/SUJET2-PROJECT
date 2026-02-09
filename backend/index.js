const express = require("express");
const cors = require("cors");
console.log("INDEX BOOT");

const usersRoutes = require("./routes/users");
console.log("USERS ROUTE IMPORTÉE");

const app = express();

app.use(cors());
app.use(express.json());

console.log("🔥 INDEX chargé");

// ROOT
app.get("/", (req, res) => {
  res.send("ROOT OK");
});

// TEST SIMPLE
app.get("/users-test", (req, res) => {
  res.json({ ok: true });
});

// USERS ROUTER
app.use("/users", usersRoutes);

//app.use("/users", usersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
