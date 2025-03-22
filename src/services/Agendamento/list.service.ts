import { prisma } from "../../infra/database";

export async function listAppointment() {
  return await prisma.agendamento.findMany();
}
