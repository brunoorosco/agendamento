import { prisma } from "../../infra/database";

export async function listDisponibilidade() {
  return await prisma.disponibilidade.findMany();
}
