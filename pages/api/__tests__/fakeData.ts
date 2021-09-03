import { Prisma } from "@prisma/client";

export const usersData: Prisma.UserCreateInput[] = [
  { username: "Harry Potter" },
  { username: "Hermione Granger" },
  { username: "Ron Weasley" },
];

export const mushroomsData: Prisma.MushroomCreateWithoutUserInput[] = [
  {
    name: "Herkkutatti",
    description: "Rounded cap, green sponge, delicious",
    image: "/link/to/image",
  },
  { name: "Suppilovahvero" },
];

export const mushroomDetailsData: Prisma.MushroomDetailsCreateWithoutMushroomInput[] =
  [
    {
      taste_rating: 3,
      poison_level: 0,
      ffa_recommended: true,
      boiling_required: false,
      dyeing: false,
    },
    {
      taste_rating: 3,
      poison_level: 0,
    },
  ];
