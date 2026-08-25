/*
  Warnings:

  - You are about to drop the `goalinfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "goalinfo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "context" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
