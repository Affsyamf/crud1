import * as clientServices from "../services/clientservices.js";

export const getClients = async (req, res) => {
    try {
        const clients = await clientServices.getClients(req, res);
        res.status(200).json(clients);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }};
    
export const createclient = async (req, res) => {
    try {
        const clientData = req.body;
        const newclient = await clientServices.createclient(clientData);
        res.status(201).json(newclient);
    }
    catch (error) {
      console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }};