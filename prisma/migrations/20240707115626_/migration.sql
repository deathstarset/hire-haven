/*
  Warnings:

  - Added the required column `applyBefore` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherSkills` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibilities` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whoYouAre` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('FullTime', 'PartTime');

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "applyBefore" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "otherSkills" TEXT NOT NULL,
ADD COLUMN     "postedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "responsibilities" TEXT NOT NULL,
ADD COLUMN     "type" "JobType" NOT NULL,
ADD COLUMN     "whoYouAre" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userSkills" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "userSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobSkills" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "jobSkills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userSkills_userId_skillId_key" ON "userSkills"("userId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "jobSkills_jobId_skillId_key" ON "jobSkills"("jobId", "skillId");

-- AddForeignKey
ALTER TABLE "userSkills" ADD CONSTRAINT "userSkills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSkills" ADD CONSTRAINT "userSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobSkills" ADD CONSTRAINT "jobSkills_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobSkills" ADD CONSTRAINT "jobSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
