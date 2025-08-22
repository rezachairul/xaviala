const { PrismaClient, Role } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  // Hapus skipDuplicates (nggak support di SQLite)
  // dan gunakan Role.ADMIN / Role.USER dari enum
  await prisma.user.createMany({
    data: [
      {
        name: "Admin Xaviala",
        username: "admin",
        email: "xaviala.admin@xaviala.write.id",
        password: hashedPassword,
        role: Role.ADMIN, // enum, bukan string
      },
      {
        name: "User Xaviala",
        username: "user",
        email: "xaviala.user@xaviala.write.id",
        password: hashedPassword,
        role: Role.USER,
      },
    ],
  });

  console.log("✅ Dummy users berhasil ditambahkan dengan password hashed!");
}

main()
  .catch((e) => {
    console.error("❌ Error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
