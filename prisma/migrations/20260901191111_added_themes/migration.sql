/*
  Warnings:

  - Added the required column `theme_id` to the `goals` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "themes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_goals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "byline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "theme_id" INTEGER NOT NULL,
    CONSTRAINT "goals_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "themes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_goals" ("byline", "color", "description", "icon", "id", "image_url", "title", "video_url") SELECT "byline", "color", "description", "icon", "id", "image_url", "title", "video_url" FROM "goals";
DROP TABLE "goals";
ALTER TABLE "new_goals" RENAME TO "goals";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
