-- DropIndex
DROP INDEX `Diary_id_key` ON `diary`;

-- DropIndex
DROP INDEX `PrivateComplete_id_key` ON `privatecomplete`;

-- DropIndex
DROP INDEX `PrivateGoal_id_key` ON `privategoal`;

-- DropIndex
DROP INDEX `PublicComplete_id_key` ON `publiccomplete`;

-- DropIndex
DROP INDEX `PublicGoal_id_key` ON `publicgoal`;

-- DropIndex
DROP INDEX `User_id_key` ON `user`;

-- CreateIndex
CREATE INDEX `userId` ON `Diary`(`userId`);

-- AddForeignKey
ALTER TABLE `PrivateGoal` ADD CONSTRAINT `PrivateGoal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrivateComplete` ADD CONSTRAINT `PrivateComplete_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diary` ADD CONSTRAINT `Diary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PublicComplete` ADD CONSTRAINT `PublicComplete_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
