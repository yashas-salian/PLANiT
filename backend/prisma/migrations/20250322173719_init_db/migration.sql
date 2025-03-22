-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "PhoneNumber" BIGINT NOT NULL,
    "EventName" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "EventDate" TIMESTAMP(3) NOT NULL,
    "EventVenue" TEXT NOT NULL,
    "Attendees" INTEGER NOT NULL,
    "Budget" BIGINT NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venues" (
    "id" SERIAL NOT NULL,
    "VenueName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "Rent" BIGINT NOT NULL,

    CONSTRAINT "Venues_pkey" PRIMARY KEY ("id")
);
