/*
  Warnings:

  - Added the required column `additionalInformation` to the `applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "applications" ADD COLUMN     "additionalInformation" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Pending';
