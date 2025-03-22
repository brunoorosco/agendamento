import express from "express";
import { createProfissional, listProfissional } from "../services/Profissional";
const router = express.Router();

router.post("/profissional", async (req, res) => {
  try {
    const { name, id } = req.body;
    const prof = await createProfissional(name, id);
    res.json(prof);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/profissional", async (req, res) => {
  try {
    const prof = await listProfissional();
    res.json(prof);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
