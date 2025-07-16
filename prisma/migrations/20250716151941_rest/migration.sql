-- AlterEnum
ALTER TYPE "Roles" ADD VALUE 'SUPERUSER';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "attractions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "categoryId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "averageRating" DOUBLE PRECISION,
    "visitDuration" DOUBLE PRECISION,
    "entryFee" DOUBLE PRECISION,
    "website" TEXT,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attractions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Belarus',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "attractionId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "caption" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "attractionId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operation_hours" (
    "id" SERIAL NOT NULL,
    "attractionId" INTEGER NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "openTime" TEXT,
    "closeTime" TEXT,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "operation_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "isGenerated" BOOLEAN NOT NULL DEFAULT false,
    "duration" DOUBLE PRECISION,
    "distance" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes_rating" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routes_rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttractionToTag" (
    "attractionId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "AttractionToTag_pkey" PRIMARY KEY ("attractionId","tagId")
);

-- CreateTable
CREATE TABLE "RouteToAttraction" (
    "routeId" INTEGER NOT NULL,
    "attractionId" INTEGER NOT NULL,

    CONSTRAINT "RouteToAttraction_pkey" PRIMARY KEY ("routeId","attractionId")
);

-- CreateTable
CREATE TABLE "_AttractionToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AttractionToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_RouteToAttraction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RouteToAttraction_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "attractions_locationId_key" ON "attractions"("locationId");

-- CreateIndex
CREATE INDEX "_AttractionToTag_B_index" ON "_AttractionToTag"("B");

-- CreateIndex
CREATE INDEX "_RouteToAttraction_B_index" ON "_RouteToAttraction"("B");

-- AddForeignKey
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operation_hours" ADD CONSTRAINT "operation_hours_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes_rating" ADD CONSTRAINT "routes_rating_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes_rating" ADD CONSTRAINT "routes_rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttractionToTag" ADD CONSTRAINT "AttractionToTag_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttractionToTag" ADD CONSTRAINT "AttractionToTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteToAttraction" ADD CONSTRAINT "RouteToAttraction_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteToAttraction" ADD CONSTRAINT "RouteToAttraction_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttractionToTag" ADD CONSTRAINT "_AttractionToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "attractions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttractionToTag" ADD CONSTRAINT "_AttractionToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RouteToAttraction" ADD CONSTRAINT "_RouteToAttraction_A_fkey" FOREIGN KEY ("A") REFERENCES "attractions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RouteToAttraction" ADD CONSTRAINT "_RouteToAttraction_B_fkey" FOREIGN KEY ("B") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
