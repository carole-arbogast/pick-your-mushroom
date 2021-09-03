import { Prisma } from "@prisma/client";
import { prisma } from "./db";
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
    {
      name: "Herkkutatti",
      userId: users[0].id,
      description: "Rounded cap, green sponge, delicious",
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630599065/herkkutatti_wvv5dd.jpg",
    },
    {
      name: "Suppilovahvero",
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630599066/suppilovahvero_ndbna0.jpg",
      userId: users[1].id,
    },
    {
      name: "Test Mushroom",
      userId: users[1].id,
    },
  ];

  await prisma.mushroom.createMany({ data: mushroomsData });
  const mushrooms = await prisma.mushroom.findMany({});

  const mushroomDetailsData: Prisma.MushroomDetailsCreateManyInput[] = [
    {
      mushroomId: mushrooms[0].id,
      taste_rating: 3,
      poison_level: 0,
      dyeing: false,
      ffa_recommended: true,
      boiling_required: false,
    },
    {
      mushroomId: mushrooms[1].id,
      taste_rating: 3,
      poison_level: 0,
      dyeing: false,
      ffa_recommended: true,
      boiling_required: false,
    },
    {
      mushroomId: mushrooms[2].id,
      taste_rating: 0,
      poison_level: 2,
      dyeing: true,
      ffa_recommended: false,
      boiling_required: true,
    },
  ];

  await prisma.mushroomDetails.createMany({
    data: mushroomDetailsData,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
