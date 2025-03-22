import express from "express";
import { createAppointment, listAppointment } from "../services/Agendamento";

const router = express.Router();

router.post("/agendamento", async (req, res) => {
  try {
    const { professionalId, clientName, date, startTime, endTime } = req.body;
    const appointment = await createAppointment(
      professionalId,
      clientName,
      date,
      startTime,
      endTime
    );
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});
router.get("/agendamento", async (req, res) => {
  try {
    const appointment = await listAppointment();
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
