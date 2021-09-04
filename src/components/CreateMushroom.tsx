import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./layouts/Button";
import {
  FieldGroup,
  TextArea,
  Form,
  Required,
  Label,
  Select,
} from "./layouts/forms";

type Inputs = {
  name: string;
  taste: number;
  toxicity: number;
  season: string[];
  description?: string;
  image?: string;
};

export function CreateMushroom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("submitting mushroom", data);

  return (
    <>
      <h2>Create a new mushroom</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Label>
            Name <Required>*</Required>
          </Label>
          <input {...register("name", { required: true })}></input>
        </FieldGroup>

        <FieldGroup>
          <Label>
            Taste <Required>*</Required>
          </Label>
          <Select defaultValue={0} {...register("taste")}>
            <option value={0}>Non edible</option>
            <option value={1}>Edible</option>
            <option value={2}>Good</option>
            <option value={3}>Delicious</option>
          </Select>
        </FieldGroup>

        <FieldGroup>
          <Label>
            Toxicity <Required>*</Required>
          </Label>
          <Select defaultValue={0} {...register("toxicity")}>
            <option value={0}>Non toxic</option>
            <option value={1}>Toxic</option>
            <option value={2}>Dangerously toxic</option>
            <option value={3}>Deadly</option>
          </Select>
        </FieldGroup>

        <FieldGroup>
          <Label>Image (insert a link)</Label>
          <input {...register("image")}></input>
        </FieldGroup>

        <FieldGroup>
          <Label>Description</Label>
          <TextArea {...register("description")}></TextArea>
        </FieldGroup>

        {errors.name && <span>This field is required</span>}

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default CreateMushroom;
