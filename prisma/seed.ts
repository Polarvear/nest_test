import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@example.com',
        password: '1234', // bcrypt 해시된 비밀번호 (실제로는 보안을 위해 bcrypt를 사용해야 합니다)
        name: 'Admin User',
      },
      {
        email: 'user1@example.com',
        password: '1234',
        name: 'User One',
      },
      {
        email: 'user2@example.com',
        password: '1234',
        name: 'User Two',
      },
    ],
  });

  console.log('Seed finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
