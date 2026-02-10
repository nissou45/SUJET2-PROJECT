import mysql from "mysql2/promise";

import "dotenv/config";

let db;
try {
  // Création d'un "connection pool , performant et gère de façon auto plusieurs requetes en meme temps"
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  // Test de la connexion
  await db.getConnection();
  console.log("database connexion", process.env.DB_NAME);
} catch (error) {
  console.error(
    "erreurs lors de la connexion de la base de donnée ",
    error.message,
  );
  // Arret complet du serveur si aucune base de db opérationnel
  process.exit(1);
} // export de la connexion pour pouvoir utiliser dans d'autres fichiers
export { db };
