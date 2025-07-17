/*
  Warnings:

  - The `name` column on the `categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TouristPlaceCategory" AS ENUM ('NATURE', 'CULTURAL_HISTORICAL', 'ENTERTAINMENT_PARK', 'GASTRONOMY', 'BEACH_RESORT', 'SKI_RESORT', 'RELIGIOUS', 'URBAN', 'ADVENTURE', 'ECO_AGRO');

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "name",
ADD COLUMN     "name" "TouristPlaceCategory" NOT NULL DEFAULT 'CULTURAL_HISTORICAL';
