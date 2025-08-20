const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Admin Xaviala",
        username: "admin",
        email: "admin@xaviala.com",
        password: "123456",
        role: "admin",
      },
      {
        name: "User Xaviala",
        username: "user",
        email: "user@xaviala.com",
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
