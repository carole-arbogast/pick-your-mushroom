import React from "react";
import { Meta } from "@storybook/react";

import { Mushroom } from "../generated/graphql";
import { MushroomList } from "../components/MushroomList";

export default {
  component: MushroomList,
  title: "Components/MushroomList",
} as Meta;

const mushroom: Mushroom[] = [
  {
    id: 1,
    name: "Mushroom Name",
    description: "This is a description of the mushroom's properties.",
    userId: 1,
  },
];

export const Main: React.VFC<{}> = () => <MushroomList mushrooms={mushroom} />;
