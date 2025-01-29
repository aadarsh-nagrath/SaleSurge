import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "production") {
    globalThis.prisma = prismadb;
}

export default prismadb;

//Import PrismaClient: Import the PrismaClient from the @prisma/client package.
//Declare global variable: Use TypeScript to declare a global variable named 'prisma' of type 'PrismaClient'.
//Initialize PrismaClient instance: Create a new instance named 'prismadb', or use an existing one if 'globalThis.prisma' is already defined.
//Set global PrismaClient instance in production: If the Node.js environment is in production (process.env.NODE_ENV is set to "production"), set the globally declared 'prisma' variable to the instance created earlier ('prismadb'). This is likely done to reuse the same database connection throughout the application in a production environment, which can improve performance.
//Export the PrismaClient instance: Export the 'prismadb' instance as the default export of the module. This allows other modules to import and use this PrismaClient instance in their code.
