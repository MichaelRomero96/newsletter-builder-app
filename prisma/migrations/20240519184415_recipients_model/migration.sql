/*
  Warnings:

  - You are about to drop the column `recipient` on the `SentEmail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SentEmail" DROP COLUMN "recipient";

-- CreateTable
CREATE TABLE "Recipient" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "sentEmailId" INTEGER NOT NULL,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_sentEmailId_fkey" FOREIGN KEY ("sentEmailId") REFERENCES "SentEmail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
