import { prisma } from "./db";

export const mushrooms = () => {
  return prisma.mushroom.findMany();
};

export const mushroom = (parent: undefined, args: { id: number }) => {
  return prisma.mushroom.findUnique({
    where: { id: args.id },
    include: { mushroomDetails: true },
  });
};
