import React from "react";
import { Meta } from "@storybook/react";

import { MushroomCard } from "../components/MushroomCard";
import { Mushroom } from "../generated/graphql";

export default {
  component: MushroomCard,
  title: "Components/MushroomCard",
} as Meta;

const mushroom: Mushroom = {
  id: 1,
  name: "Mushroom Name",
  description: "This is a description of the mushroom's properties.",
  userId: 1,
};

export const Main: React.VFC<{}> = () => <MushroomCard mushroom={mushroom} />;
