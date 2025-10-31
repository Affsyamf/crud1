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

export const updateclient = async (clientData, clientId) => {
  const { name, email, job, favorite_color, isactive } = clientData;
  const { rows } = await query(
    "UPDATE clients SET name = $1, email = $2, job = $3, favorite_color = $4, isactive = $5 where id = $6 RETURNING *",
    [name, email, job, favorite_color, isactive, clientId ]
  );
  return rows[0];
};

export const deleteclient = async (clientId) => {
 const { rowCount } = await query(
    "DELETE FROM clients where id = $1",
    [clientId ]
  );
  return rowCount > 0;
};

export const searchclient = async (searchTerms) => {
    if (!searchTerms) {
    return [];
  }
 const { rows } = await query(
    "SELECT * FROM clients where name ILIKE $1 OR job ILIKE $1 OR email ILIKE $1 OR favorite_color ILIKE $1 order by id ASC",
    [`%${searchTerms}%`]
  );
  return rows;
};
