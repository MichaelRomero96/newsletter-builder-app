/*
  Warnings:

  - You are about to drop the column `body` on the `EmailTemplate` table. All the data in the column will be lost.
  - Added the required column `from` to the `EmailTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html` to the `EmailTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmailTemplate" DROP COLUMN "body",
ADD COLUMN     "from" TEXT NOT NULL,
ADD COLUMN     "html" TEXT NOT NULL;
