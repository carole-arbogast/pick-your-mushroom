import { Meta } from "@storybook/react";
import { Navbar } from "../components/Navbar";
import React from "react";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;

export const Main: React.VFC<{}> = () => <Navbar />;
