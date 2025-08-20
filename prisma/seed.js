const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Admin Xaviala",
        username: "admin",
        email: "xaviala.admin@xaviala.write.id",
        password: "123456",
        role: "admin",
      },
      {
        name: "User Xaviala",
        username: "user",
        email: "xaviala.user@xaviala.write.id",
        password: "123456",
        role: "user",
      },
    ],
  });
  console.log("✅ Dummy users berhasil ditambahkan!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
