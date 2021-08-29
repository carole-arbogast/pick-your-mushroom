-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mushroom" (
    "name" VARCHAR NOT NULL,
    "id" SERIAL NOT NULL,
    "description" VARCHAR,
    "image" VARCHAR,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MushroomDetails" (
    "id" SERIAL NOT NULL,
    "taste_rating" INTEGER NOT NULL,
    "poison_level" INTEGER NOT NULL,
    "boiling_required" BOOLEAN,
    "dyeing" BOOLEAN,
    "ffa_recommended" BOOLEAN,
    "mushroomId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "mushroomId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MushroomDetails.mushroomId_unique" ON "MushroomDetails"("mushroomId");

-- CreateIndex
CREATE UNIQUE INDEX "Season.mushroomId_unique" ON "Season"("mushroomId");

-- AddForeignKey
ALTER TABLE "Mushroom" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MushroomDetails" ADD FOREIGN KEY ("mushroomId") REFERENCES "Mushroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Season" ADD FOREIGN KEY ("mushroomId") REFERENCES "Mushroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
