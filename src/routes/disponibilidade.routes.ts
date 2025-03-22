import express from "express";
import {
  createAvailability,
  listDisponibilidade,
} from "../services/Disponibilidade";

const router = express.Router();

router.post("/disponibilidade", async (req, res) => {
  try {
    const { professionalId, dayOfWeek, startTime, endTime } = req.body;
    const availability = await createAvailability(
      professionalId,
      dayOfWeek,
      startTime,
      endTime
    );
    res.json(availability);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/disponibilidade", async (req, res) => {
  try {
    const availability = await listDisponibilidade();
    res.json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
