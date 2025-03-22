import { prisma } from "../../infra/database";

export async function createProfissional(name: string, id: number) {
  return await prisma.professional.create({
    data: { name, companyId: 1 },
  });
}
