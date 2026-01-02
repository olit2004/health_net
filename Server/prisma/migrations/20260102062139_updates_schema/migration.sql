/*
  Warnings:

  - You are about to drop the column `date_time` on the `appointments` table. All the data in the column will be lost.
  - You are about to drop the column `diagnosis_text` on the `diagnoses` table. All the data in the column will be lost.
  - You are about to drop the column `treatment_plan` on the `diagnoses` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `allergies` on the `emergency_info` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_contact` on the `emergency_info` table. All the data in the column will be lost.
  - Added the required column `end_time` to the `appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facility_id` to the `assignments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disease_name` to the `diagnoses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medications` to the `diagnoses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symptoms` to the `diagnoses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AllergySeverity" AS ENUM ('MILD', 'SEVERE');

-- DropIndex
DROP INDEX "assignments_doctor_id_patient_id_key";

-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "date_time",
ADD COLUMN     "end_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "assignments" ADD COLUMN     "facility_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "diagnoses" DROP COLUMN "diagnosis_text",
DROP COLUMN "treatment_plan",
ADD COLUMN     "conclusion" TEXT,
ADD COLUMN     "disease_name" VARCHAR(200) NOT NULL,
ADD COLUMN     "emergencyVisibilty" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "medications" TEXT NOT NULL,
ADD COLUMN     "suggestions" TEXT,
ADD COLUMN     "symptoms" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "email",
ADD COLUMN     "doctor_id" TEXT;

-- AlterTable
ALTER TABLE "emergency_info" DROP COLUMN "allergies",
DROP COLUMN "emergency_contact",
ADD COLUMN     "emergency_contact_name" TEXT,
ADD COLUMN     "emergency_contact_phone" TEXT,
ADD COLUMN     "emergency_contact_relation" TEXT,
ADD COLUMN     "medical_directives" TEXT;

-- AlterTable
ALTER TABLE "facilities" ADD COLUMN     "email" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "allergies" (
    "id" SERIAL NOT NULL,
    "allergen" TEXT NOT NULL,
    "severity" "AllergySeverity" NOT NULL,
    "notes" TEXT,
    "patient_id" INTEGER NOT NULL,

    CONSTRAINT "allergies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_facility_id_fkey" FOREIGN KEY ("facility_id") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allergies" ADD CONSTRAINT "allergies_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
