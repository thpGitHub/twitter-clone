import { PrismaClient } from "@prisma/client"

/**
 * By declaring prisma as a global variable, you can use it throughout your codebase without 
 * needing to import or pass it explicitly to every function or module that requires database access.
 */
declare global {
    var prisma: PrismaClient | undefined
}

/**
 * PrismaClient is attached to the `global` object in development to prevent
 * exhausting your database connection limit.
 */ 

const client = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") global.prisma = client

export default client