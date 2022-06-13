/*
  Warnings:

  - You are about to drop the column `index` on the `List` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "List" DROP COLUMN "index",
ADD COLUMN     "orderedTasks" INTEGER[];
