/*
  Warnings:

  - You are about to drop the column `phone` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "diagnoses" ADD COLUMN     "diagnoses_id" TEXT;

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "lab_results" ADD COLUMN     "lab_result_id" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "username",
ADD COLUMN     "user_name" TEXT NOT NULL;
