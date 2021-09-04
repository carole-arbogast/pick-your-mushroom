import { CreateMushroom } from "../components/CreateMushroom";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: CreateMushroom,
  title: "Components/CreateMushroom",
} as Meta;

export const Main: React.VFC<{}> = () => <CreateMushroom />;
