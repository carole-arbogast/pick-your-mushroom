import { Meta } from "@storybook/react";
import { MushroomDetails } from "../generated/graphql";
import { MushroomLogos } from "../components/MushroomLogos";
import React from "react";

export default {
  component: MushroomLogos,
  title: "Components/MushroomLogos",
} as Meta;

const mushroomDetails: MushroomDetails = {
  id: 1,
  poison_level: 0,
  taste_rating: 3,
};

export const MainLogos: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{
      ...mushroomDetails,
      taste_rating: 1,
      poison_level: 2,
      dyeing: true,
      ffa_recommended: true,
      boiling_required: true,
    }}
  />
);

export const WorthlessTaste: React.VFC<{}> = () => (
  <MushroomLogos mushroomDetails={{ ...mushroomDetails, taste_rating: 0 }} />
);

export const OneStar: React.VFC<{}> = () => (
  <MushroomLogos mushroomDetails={{ ...mushroomDetails, taste_rating: 1 }} />
);

export const TwoStars: React.VFC<{}> = () => (
  <MushroomLogos mushroomDetails={{ ...mushroomDetails, taste_rating: 2 }} />
);

export const ThreeStars: React.VFC<{}> = () => (
  <MushroomLogos mushroomDetails={{ ...mushroomDetails, taste_rating: 3 }} />
);

export const SlightlyPoisonous: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{ ...mushroomDetails, poison_level: 1, taste_rating: 0 }}
  />
);

export const Poisonous: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{ ...mushroomDetails, poison_level: 2, taste_rating: 0 }}
  />
);

export const Deadly: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{ ...mushroomDetails, poison_level: 3, taste_rating: 0 }}
  />
);

export const DeadlyButDelicious: React.VFC<{}> = () => (
  <MushroomLogos mushroomDetails={{ ...mushroomDetails, poison_level: 3 }} />
);

export const RequiresBoiling: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{
      ...mushroomDetails,
      poison_level: 2,
      taste_rating: 2,
      boiling_required: true,
    }}
  />
);

export const UsedForDyeing: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{
      ...mushroomDetails,
      poison_level: 2,
      taste_rating: 0,
      dyeing: true,
    }}
  />
);

export const RecommendedByFoodAgency: React.VFC<{}> = () => (
  <MushroomLogos
    mushroomDetails={{
      ...mushroomDetails,
      poison_level: 0,
      taste_rating: 3,
      ffa_recommended: true,
    }}
  />
);
