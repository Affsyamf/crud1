import { query } from "../db";

export const getClients = async (req, res) => {
  try {
    const result = await query("SELECT * FROM clients");    
  }}
