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
    "created" DATETIME NOT NULL,
    CONSTRAINT "comments_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comments" ("active", "comment", "created", "goal_id", "id", "title", "user_id") SELECT "active", "comment", "created", "goal_id", "id", "title", "user_id" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
