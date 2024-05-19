/*
  Warnings:

  - You are about to drop the column `sentEmailId` on the `Recipient` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recipient" DROP CONSTRAINT "Recipient_sentEmailId_fkey";

-- AlterTable
ALTER TABLE "Recipient" DROP COLUMN "sentEmailId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
