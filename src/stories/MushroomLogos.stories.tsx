import React from "react";
import { Meta } from "@storybook/react";

import { MushroomDetails } from "../generated/graphql";
import { MushroomLogos } from "../components/MushroomLogos";

export default {
  component: MushroomLogos,
  title: "Components/MushroomLogos",
} as Meta;

const mushroomDetails: MushroomDetails = {
  id: 1,
  poison_level: 3,
  taste_rating: 3,
  dyeing: true,
  ffa_recommended: true,
  boiling_required: true,
};

export const Main: React.VFC<{}> = () => (
  <MushroomLogos mushroomDetails={mushroomDetails} />
);
