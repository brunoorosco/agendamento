import { prisma } from "../../infra/database";

export async function createAvailability(
  professionalId: number,
  dayOfWeek: number,
  startTime: string,
  endTime: string
) {
  return await prisma.disponibilidade.create({
    data: { professionalId, dayOfWeek, startTime, endTime },
  });
}
