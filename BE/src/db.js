import { Pool } from "pg";
import env from "dotenv";

env.config();

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.query("SELECT NOW()")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Database connection error", err.stack);
  });

export const query = (text, params) => db.query(text, params);

export default db;
