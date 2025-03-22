import { prisma } from "../../infra/database";

export async function listProfissional() {
  return await prisma.professional.findMany();
}
