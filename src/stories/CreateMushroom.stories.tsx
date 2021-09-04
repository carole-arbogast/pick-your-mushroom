import React from "react";
import { Meta } from "@storybook/react";

import { CreateMushroom } from "../components/CreateMushroom";

export default {
  component: CreateMushroom,
  title: "Components/CreateMushroom",
} as Meta;

export const Main: React.VFC<{}> = () => <CreateMushroom />;
