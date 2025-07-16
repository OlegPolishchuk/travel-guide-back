/*
  Warnings:

  - You are about to drop the `AttractionToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RouteToAttraction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AttractionToTag" DROP CONSTRAINT "AttractionToTag_attractionId_fkey";

-- DropForeignKey
ALTER TABLE "AttractionToTag" DROP CONSTRAINT "AttractionToTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "RouteToAttraction" DROP CONSTRAINT "RouteToAttraction_attractionId_fkey";

-- DropForeignKey
ALTER TABLE "RouteToAttraction" DROP CONSTRAINT "RouteToAttraction_routeId_fkey";

-- DropTable
DROP TABLE "AttractionToTag";

-- DropTable
DROP TABLE "RouteToAttraction";

-- CreateTable
CREATE TABLE "attraction_to_tag" (
    "attractionId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "attraction_to_tag_pkey" PRIMARY KEY ("attractionId","tagId")
);

-- CreateTable
CREATE TABLE "route_to_attraction" (
    "routeId" INTEGER NOT NULL,
    "attractionId" INTEGER NOT NULL,

    CONSTRAINT "route_to_attraction_pkey" PRIMARY KEY ("routeId","attractionId")
);

-- AddForeignKey
ALTER TABLE "attraction_to_tag" ADD CONSTRAINT "attraction_to_tag_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attraction_to_tag" ADD CONSTRAINT "attraction_to_tag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_to_attraction" ADD CONSTRAINT "route_to_attraction_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_to_attraction" ADD CONSTRAINT "route_to_attraction_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
