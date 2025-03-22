import express from "express";
import availabilityRoutes from "./routes/disponibilidade.routes";
import appointmentRoutes from "./routes/agendamento.routes";
import profissionalRoutes from "./routes/professional.routes";

const app = express();
app.use(express.json());

app.use("/api", availabilityRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", profissionalRoutes);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
