import { Button } from "../components/layouts/Button";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: Button,
  title: "Components | layouts/Button",
} as Meta;

export const Main: React.VFC<{}> = () => <Button>Button </Button>;
