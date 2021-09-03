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
      description:
        "One of the most popular mushrooms, especially in Italian cuisine. It has a 10-25cm rounded cap, brown color on top, and is slightly sticky to the touch. \n The spores are white with young mushrooms, then turn yellow and green. The foot is pale and measures 10-20cm. It usually grows in July-September, although it can be found up until September during sudden bursts.",
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630682557/herkkutatti_wvv5dd-c_scale_q_49_w_300_slkumj.jpg",
    },
    {
      name: "Suppilovahvero",
      description:
        "A small mushroom with a cap of 2-3cm, funnel shaped with a deep navel in the middle. On the lower surface of the cap, gray-yellowish colors can be found. The foot measures 3-10cm, with a yellow-greenish color. The taste is mild but aromatic. It grows in large groups from the end of September until the end of November. ",
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630682493/suppilovahvero_ndbna0-c_scale_q_70_w_300_gfcatf.jpg",
      userId: users[1].id,
    },
    {
      name: "Valkokärpässieni",
      description:
        "3-12 cm round cap with a 6-15cm foot. This mushroom is white, although it can turn yellow when ageing. The foot is very thin on top, and has a large bulb at the base. It is highly toxic. ",
      userId: users[1].id,
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630688297/Going_for_a_bite_1117845500_gh2ygo-c_scale_w_300_nipwkn.jpg",
    },
    {
      name: "Karvarousku",
      description:
        "Red/pink mushroom with a cap of 4-12cm. Round shape with young mushrooms, then takes a flat funnel-shape. Its foot measures 3-7 cm. It feels quite dense. It grows in August-September. This mushroom is safe to eat but should be boiled first.",
      userId: users[1].id,
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630688297/1200px-Lactarius_torminosus_041031w_wimfpk-c_scale_w_300_1_mwaz7n.jpg",
    },
    {
      name: "Lampaankääpä",
      description:
        "Large mushroom, 5-15cm cap with an irregular shape. Its foot measures 3-6 cm and is bumpy, sometimes with a light brown color at the base. It has a mild taste and turns yellow when cooking.",
      userId: users[1].id,
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630688296/Schaf-Porling_Albatrellus_ovinus_t3ihlw-c_scale_w_300_bpjjmj.jpg",
    },
    {
      name: "Polttiaishapero",
      description:
        "This mushroom is not toxic, but has a strong burning taste. Its cap measures 4-5cm, at first with a round shape, then turns flat with a slight pit in the middle. The surface is brown-gray and sticky. The feet measures 5-12cm and is evenly thick, with a greyish color. ",
      userId: users[1].id,
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630688297/1280px-Russula_consobrina__Fr.__Fr_hpolon.jpg",
    },
  ];

  await prisma.mushroom.createMany({ data: mushroomsData });
  const mushrooms = await prisma.mushroom.findMany({});

  const mushroomDetailsData: Prisma.MushroomDetailsCreateManyInput[] = [
    {
      mushroomId: mushrooms[0].id,
      taste_rating: 3,
      poison_level: 0,
      dyeing: true,
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
      poison_level: 3,
      dyeing: false,
      ffa_recommended: false,
      boiling_required: false,
    },
    {
      mushroomId: mushrooms[3].id,
      taste_rating: 2,
      poison_level: 0,
      dyeing: false,
      ffa_recommended: true,
      boiling_required: true,
    },
    {
      mushroomId: mushrooms[4].id,
      taste_rating: 3,
      poison_level: 0,
      dyeing: false,
      ffa_recommended: true,
      boiling_required: false,
    },
    {
      mushroomId: mushrooms[5].id,
      taste_rating: 0,
      poison_level: 0,
      dyeing: false,
      ffa_recommended: false,
      boiling_required: false,
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
