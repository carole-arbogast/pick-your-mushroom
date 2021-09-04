import { Meta } from "@storybook/react";
import { Mushroom } from "../generated/graphql";
import { MushroomCard } from "../components/MushroomCard";
import React from "react";

export default {
  component: MushroomCard,
  title: "Components/MushroomCard",
} as Meta;

const mushroom: Mushroom = {
  id: 1,
  name: "Mushroom Name",
  description: "This is a description of the mushroom's properties.",
  userId: 1,
  mushroomDetails: {
    id: 1,
    poison_level: 0,
    taste_rating: 3,
    ffa_recommended: true,
  },
};

export const WithPlaceholderImage: React.VFC<{}> = () => (
  <MushroomCard mushroom={mushroom} />
);

export const WithRealImage: React.VFC<{}> = () => (
  <MushroomCard
    mushroom={{
      ...mushroom,
      image:
        "https://res.cloudinary.com/carole-arbogast/image/upload/v1630599065/herkkutatti_wvv5dd.jpg",
    }}
  />
);

export const WithLongDescription: React.VFC<{}> = () => (
  <MushroomCard
    mushroom={{
      ...mushroom,
      description:
        "Patronum patronum immobilus nox portus. Stupefy skele-gro engorgio petrificus ennervate. Anapneo evanesco nox sonorus locomotor ennervate immobilus. Stupefy evanesco orchideous mortis. Furnunculus engorgio kedavra sonorus ennervate. Lacarnum immobilus protego leviosa mobilicorpus stupefy mortis felix locomotor leviosa. Arania lumos imperio lumos locomotor unbreakable leviosa aparecium.",
    }}
  />
);

export const WithoutDescription: React.VFC<{}> = () => (
  <MushroomCard
    mushroom={{
      ...mushroom,
      description: null,
    }}
  />
);

export const WithoutEatingDetails: React.VFC<{}> = () => (
  <MushroomCard
    mushroom={{
      ...mushroom,
      mushroomDetails: null,
    }}
  />
);
