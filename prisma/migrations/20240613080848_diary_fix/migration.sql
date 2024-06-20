/*
  Warnings:

  - Added the required column `mission` to the `Diary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Diary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `diary` ADD COLUMN `mission` INTEGER NOT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL;
