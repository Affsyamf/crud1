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
        res.status(500).json({ error: "Gagal membuat data karyawan" });
    }};

export const updateclient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updatedclient = await clientServices.updateclient(clientData, clientId);
        res.status(200).json(updatedclient);
        if (!updatedclient) {
            return res.status(404).json({ error: "Karyawan tidak ditemukan" });
        }
        res.status(200).json(updatedclient);
    }
    catch (error) {
      console.error(error);
        res.status(500).json({ error: "Gagal memperbaharui data karyawan" });
    }};


export const deleteclient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deletedclient = await clientServices.deleteclient(clientId);
        if (!deletedclient) {
            return res.status(404).json({ error: "Karyawan tidak ditemukan tidak dapat dihapus" });
        }
        res.status(200).send("Karyawan berhasil dihapus");
    }
    catch (error) {
      console.error(error);
        res.status(500).json({ error: "Gagal menghapus data karyawan" });
    }};