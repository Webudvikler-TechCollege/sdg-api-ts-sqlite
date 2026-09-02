/*
  Warnings:

  - Added the required column `slug` to the `themes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_themes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_themes" ("id", "title") SELECT "id", "title" FROM "themes";
DROP TABLE "themes";
ALTER TABLE "new_themes" RENAME TO "themes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
