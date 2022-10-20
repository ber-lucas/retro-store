-- CreateTable
CREATE TABLE "UserOnGame" (
    "gameId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("gameId", "userId"),
    CONSTRAINT "UserOnGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
