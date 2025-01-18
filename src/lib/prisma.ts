// lib/prisma.ts
// En desarrollo, Next.js con hot reload puede crear múltiples instancias de PrismaClient, lo cual no es deseable.
// Este patrón asegura que solo se cree una instancia y se reutilice.
// Guarda la instancia en el objeto global durante desarrollo.
// Evita problemas de conexiones múltiples a la base de datos.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
