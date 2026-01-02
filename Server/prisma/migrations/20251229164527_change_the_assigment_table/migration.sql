-- CreateEnum
CREATE TYPE "AssignmentStatus" AS ENUM ('ACTIVE', 'CANCELED');

-- AlterTable
ALTER TABLE "assignments" ADD COLUMN     "status" "AssignmentStatus" NOT NULL DEFAULT 'ACTIVE';
