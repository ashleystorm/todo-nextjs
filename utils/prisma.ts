import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();    //<-- generated to connect to our MongoDB through prisma

// this function allows us to modify our database 