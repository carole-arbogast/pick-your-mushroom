import React from "react";
import { Meta } from "@storybook/react";

import { Button } from "../components/layouts/Button";

export default {
  component: Button,
  title: "Components | layouts/Button",
} as Meta;

export const Main: React.VFC<{}> = () => <Button>Button </Button>;
