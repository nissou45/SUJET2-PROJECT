const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

const SECRET = process.env.JWT_SECRET;
console.log("JWT SECRET =", process.env.JWT_SECRET);

console.log("🔥 USERS ROUTE CHARGÉE");

// REGISTER
router.post("/register", async (req, res) => {
  const { nom, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (nom, email, password_hash) VALUES (?, ?, ?)",
    [nom, email, hash],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ ok: true });
    },
  );
});

// LOGIN + JWT
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, rows) => {
      if (err) return res.status(500).json(err);
      if (rows.length === 0)
        return res.status(401).json({ message: "Utilisateur inconnu" });

      const user = rows[0];

      const match = await bcrypt.compare(password, user.password_hash);
      if (!match)
        return res.status(401).json({ message: "Mot de passe incorrect" });

      const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
        expiresIn: "2h",
      });

      res.json({
        message: "Login OK",
        token,
      });
    },
  );
});

// MIDDLEWARE JWT
function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ message: "Token manquant" });

  const token = header.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token invalide" });

    req.user = decoded;
    next();
  });
}

// /users/me
router.get("/me", auth, (req, res) => {
  db.query(
    "SELECT id, nom, email FROM users WHERE id = ?",
    [req.user.id],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows[0]);
    },
  );
});

module.exports = router;
