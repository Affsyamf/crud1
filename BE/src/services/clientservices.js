import { query } from "../db";

export const getClients = async (req, res) => {
    const {rows} = await query("SELECT * FROM clients ORDER BY id ASC");
    return rows;
}
