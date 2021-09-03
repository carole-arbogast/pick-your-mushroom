import React from "react";
import { Meta } from "@storybook/react";

import { Navbar } from "../components/Navbar";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;

export const Main: React.VFC<{}> = () => <Navbar />;
