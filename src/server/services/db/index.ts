import { PrismaClient } from '@prisma/client';

declare global {
  interface Global {
    prisma?: PrismaClient;
  }
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma: any = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
