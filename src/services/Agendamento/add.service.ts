import { prisma } from "../../infra/database";

export async function createAppointment(
  professionalId: number,
  clientName: string,
  date: string,
  startTime: string,
  endTime: string
) {
  console.log(professionalId, clientName, new Date(date), startTime, endTime);
  const existingAppointment = await prisma.agendamento.findFirst({
    where: { professionalId, date: new Date(date), startTime },
  });

  if (existingAppointment) {
    throw new Error("Horário já está agendado.");
  }

  return await prisma.agendamento.create({
    data: {
      professionalId,
      clientName,
      date: new Date(date),
      startTime,
      endTime,
    },
  });
}
