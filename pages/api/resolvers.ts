import { Prisma } from "@prisma/client";
import { prisma } from "./db";

export const getMushrooms = () => {
  return prisma.mushroom.findMany();
};

export const getMushroomById = async (_: undefined, args: { id: number }) => {
  const res = await prisma.mushroom.findUnique({
    where: { id: args.id },
    include: { mushroomDetails: true },
  });

  return res;
};

interface ICreateMushroom {
  data: {
    mushroom: Prisma.MushroomCreateInput;
    mushroomDetails: Prisma.MushroomDetailsCreateInput;
    user: number;
  };
}

export const createMushroom = async (_: undefined, args: ICreateMushroom) => {
  const { mushroom, mushroomDetails, user } = args.data;

  return await prisma.mushroom.create({
    data: {
      name: mushroom.name,
      description: mushroom.description,
      image: mushroom.image,
      userId: user,
      mushroomDetails: {
        create: { ...mushroomDetails },
      },
    },
    include: { mushroomDetails: true },
  });
};

interface IUpdateMushroom {
  id: number;
  data: {
    mushroom: Prisma.MushroomUpdateInput;
    mushroomDetails: Prisma.MushroomDetailsUpdateInput;
  };
}

export const updateMushroom = async (_: undefined, args: IUpdateMushroom) => {
  const { mushroom, mushroomDetails } = args.data;
  const test = await prisma.mushroom.update({
    where: { id: args.id },
    data: {
      ...mushroom,
      mushroomDetails: {
        update: {
          ...mushroomDetails,
        },
      },
    },
    include: { mushroomDetails: true },
  });
  return test;
};

export const deleteMushroom = async (_: undefined, args: { id: number }) => {
  await prisma.mushroomDetails.delete({ where: { mushroomId: args.id } });
  return await prisma.mushroom.delete({ where: { id: args.id } });
};
