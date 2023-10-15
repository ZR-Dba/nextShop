import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: any;
}

let prisma: any;
if (process.env.DATABASE_URL === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default async function handle(req: any, res: any) {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
}
