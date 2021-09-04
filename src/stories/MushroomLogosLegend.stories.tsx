import { Meta } from "@storybook/react";
import { MushroomLogosLegend } from "../components/MushroomLogosLegend";
import React from "react";

export default {
  component: MushroomLogosLegend,
  title: "Components/MushroomLogosLegend",
} as Meta;

export const Main: React.VFC<{}> = () => <MushroomLogosLegend />;
