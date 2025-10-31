import { query } from "../db.js";

export const getClients = async (req, res) => {
  const { rows } = await query("SELECT * FROM clients ORDER BY id ASC");
  return rows;
};

export const createclient = async (clientData) => {
  const { name, email, job, favorite_color, isactive } = clientData;
  const { rows } = await query(
    "INSERT INTO clients (name, email, job, favorite_color, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, email, job, favorite_color, isactive]
  );
  return rows[0];
};
