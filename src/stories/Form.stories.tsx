import {
  FieldGroup,
  Form,
  Label,
  Required,
  Select,
  TextArea,
} from "../components/layouts/forms";

import { CreateMushroom } from "../components/CreateMushroom";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  component: CreateMushroom,
  title: "Components | Layouts/Form",
} as Meta;

export const Main: React.VFC<{}> = () => (
  <Form>
    <FieldGroup>
      <Label>
        Required Input <Required>*</Required>
      </Label>
      <input></input>
    </FieldGroup>

    <FieldGroup>
      <Label>Textarea</Label>
      <TextArea />
    </FieldGroup>

    <FieldGroup>
      <Label>Select</Label>
      <Select>
        <option>Option 1</option>
      </Select>
    </FieldGroup>
  </Form>
);
