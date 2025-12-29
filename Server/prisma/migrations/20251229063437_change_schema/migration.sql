/*
  Warnings:

  - The values [MANAGER,STAFF] on the enum `AdminLevel` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `result_type` on the `lab_results` table. All the data in the column will be lost.
  - You are about to drop the `insurance` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[patient_code]` on the table `patients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[qr_token]` on the table `patients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `last_updated_at` to the `emergency_info` table without a default value. This is not possible if the table is not empty.
  - Made the column `facility_type` on table `facilities` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `created_by` to the `lab_results` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "InsuranceStatus" AS ENUM ('INSURED', 'UNINSURED');

-- AlterEnum
BEGIN;
CREATE TYPE "AdminLevel_new" AS ENUM ('SUPER_ADMIN', 'AdMIN');
ALTER TABLE "admins" ALTER COLUMN "admin_level" TYPE "AdminLevel_new" USING ("admin_level"::text::"AdminLevel_new");
ALTER TYPE "AdminLevel" RENAME TO "AdminLevel_old";
ALTER TYPE "AdminLevel_new" RENAME TO "AdminLevel";
DROP TYPE "public"."AdminLevel_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "insurance" DROP CONSTRAINT "insurance_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "lab_results" DROP CONSTRAINT "lab_results_doctor_id_fkey";

-- AlterTable
ALTER TABLE "emergency_info" ADD COLUMN     "last_updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "facilities" ALTER COLUMN "facility_type" SET NOT NULL;

-- AlterTable
ALTER TABLE "lab_results" DROP COLUMN "result_type",
ADD COLUMN     "created_by" INTEGER NOT NULL,
ADD COLUMN     "resultType" TEXT,
ALTER COLUMN "doctor_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "patients" ADD COLUMN     "insurance_status" "InsuranceStatus" NOT NULL DEFAULT 'UNINSURED',
ADD COLUMN     "patient_code" TEXT,
ADD COLUMN     "qr_token" TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" SET NOT NULL;

-- DropTable
DROP TABLE "insurance";

-- CreateIndex
CREATE INDEX "lab_results_patient_id_idx" ON "lab_results"("patient_id");

-- CreateIndex
CREATE INDEX "lab_results_created_by_idx" ON "lab_results"("created_by");

-- CreateIndex
CREATE UNIQUE INDEX "patients_patient_code_key" ON "patients"("patient_code");

-- CreateIndex
CREATE UNIQUE INDEX "patients_qr_token_key" ON "patients"("qr_token");

-- AddForeignKey
ALTER TABLE "lab_results" ADD CONSTRAINT "lab_results_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lab_results" ADD CONSTRAINT "lab_results_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
