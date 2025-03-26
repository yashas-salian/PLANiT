/*
  Warnings:

  - Added the required column `userID` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "userID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
