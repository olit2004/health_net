/*
  Warnings:

  - You are about to drop the column `allergen` on the `allergies` table. All the data in the column will be lost.
  - Added the required column `allergey` to the `allergies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "allergies" DROP COLUMN "allergen",
ADD COLUMN     "allergey" TEXT NOT NULL;
