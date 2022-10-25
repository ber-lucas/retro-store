/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CartToGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GameToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to alter the column `price` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `balance` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- DropIndex
DROP INDEX "Cart_userId_key";

-- DropIndex
DROP INDEX "_CartToGame_B_index";

-- DropIndex
DROP INDEX "_CartToGame_AB_unique";

-- DropIndex
DROP INDEX "_GameToUser_B_index";

-- DropIndex
DROP INDEX "_GameToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cart";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CartToGame";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_GameToUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_carrinho" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_carrinho_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_carrinho_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_biblioteca" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_biblioteca_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_biblioteca_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "userReviews" TEXT NOT NULL,
    "specifications" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Game" ("about", "bannerUrl", "id", "price", "specifications", "tag", "title", "trailer", "userReviews") SELECT "about", "bannerUrl", "id", "price", "specifications", "tag", "title", "trailer", "userReviews" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0,
    "birthday" TEXT NOT NULL,
    "userGitHub" TEXT NOT NULL
);
INSERT INTO "new_User" ("balance", "birthday", "email", "id", "name", "password", "userGitHub") SELECT "balance", "birthday", "email", "id", "name", "password", "userGitHub" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_carrinho_AB_unique" ON "_carrinho"("A", "B");

-- CreateIndex
CREATE INDEX "_carrinho_B_index" ON "_carrinho"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_biblioteca_AB_unique" ON "_biblioteca"("A", "B");

-- CreateIndex
CREATE INDEX "_biblioteca_B_index" ON "_biblioteca"("B");
