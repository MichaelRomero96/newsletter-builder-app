/*
  Warnings:

  - Added the required column `from` to the `SentEmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `SentEmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SentEmail" ADD COLUMN     "from" TEXT NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL,
ADD COLUMN     "to" TEXT[];
