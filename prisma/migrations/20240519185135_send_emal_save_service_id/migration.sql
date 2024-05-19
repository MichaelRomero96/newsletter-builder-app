/*
  Warnings:

  - Added the required column `emailServiceId` to the `SentEmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SentEmail" ADD COLUMN     "emailServiceId" TEXT NOT NULL;
