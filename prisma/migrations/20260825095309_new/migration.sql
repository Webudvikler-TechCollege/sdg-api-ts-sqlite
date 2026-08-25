/*
  Warnings:

  - You are about to drop the column `isActive` on the `comments` table. All the data in the column will be lost.
  - Added the required column `active` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "goal_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created" DATETIME NOT NULL
);
INSERT INTO "new_comments" ("comment", "created", "goal_id", "id", "title", "user_id") SELECT "comment", "created", "goal_id", "id", "title", "user_id" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
