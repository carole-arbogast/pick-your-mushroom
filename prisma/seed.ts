import { Prisma } from "@prisma/client";
import { prisma } from "../pages/api/db";
// const prisma = new PrismaClient();

async function main() {
  const usersData: Prisma.UserCreateManyInput[] = [
    { username: "Harry Potter" },
    { username: "Hermione Granger" },
    { username: "Ron Weasley" },
  ];

  await prisma.user.createMany({ data: usersData });
  const users = await prisma.user.findMany({});

  const mushroomsData: Prisma.MushroomCreateManyInput[] = [
    { name: "Herkkutatti", userId: users[0].id },
    { name: "Suppilovahvero", userId: users[1].id },
  ];

  await prisma.mushroom.createMany({ data: mushroomsData });
  const mushrooms = await prisma.mushroom.findMany({});

  const mushroomDetailsData: Prisma.MushroomDetailsCreateManyInput[] = [
    { mushroomId: mushrooms[0].id, taste_rating: 3, poison_level: 0 },
    { mushroomId: mushrooms[1].id, taste_rating: 3, poison_level: 0 },
  ];

  await prisma.mushroomDetails.createMany({ data: mushroomDetailsData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
