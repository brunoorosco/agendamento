-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disponibilidade" (
    "id" SERIAL NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "disponibilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agendamento" (
    "id" SERIAL NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "clientName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "agendamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "professional" ADD CONSTRAINT "professional_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidade" ADD CONSTRAINT "disponibilidade_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agendamento" ADD CONSTRAINT "agendamento_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
