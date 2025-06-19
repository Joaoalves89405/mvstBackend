-- CreateTable
CREATE TABLE "Coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoffeeType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoffeeType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coffee_name_key" ON "Coffee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Coffee_typeId_key" ON "Coffee"("typeId");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeType_name_key" ON "CoffeeType"("name");

-- AddForeignKey
ALTER TABLE "Coffee" ADD CONSTRAINT "Coffee_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "CoffeeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
