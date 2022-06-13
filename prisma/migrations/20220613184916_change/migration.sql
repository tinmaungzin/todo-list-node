/*
  Warnings:

  - You are about to drop the column `orderedTasks` on the `List` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "List" DROP COLUMN "orderedTasks",
ADD COLUMN     "orderedTasksById" INTEGER[];
