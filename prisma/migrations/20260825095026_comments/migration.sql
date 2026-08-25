/*
  Warnings:

  - You are about to drop the `usercomments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "usercomments";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "favorites" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "goal_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "goal_id" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "created" DATETIME NOT NULL
);
