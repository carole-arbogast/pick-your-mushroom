import { SubmitHandler, useForm } from "react-hook-form";

import styled from "styled-components";

type Inputs = {
  name: string;
  image?: string;
  ingredients?: string[];
  instructions?: string[];
  mushrooms: string[];
};

export function CreateRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("submitting mushroom", data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Recipe name</label>
      <input {...register("name")}></input>

      <label>Image Link</label>
      <input {...register("image")}></input>

      {/* TODO use Field Array instead */}
      <label>Ingredients</label>
      <input {...register("ingredients")}></input>

      <label>Instructions</label>
      <input {...register("instructions")}></input>

      {/* TODO this could be search field to look for the corresponding mushroom */}
      <label>Used Mushroom(s)</label>
      <input {...register("mushrooms")}></input>

      {errors.name && <span>This field is required</span>}

      <input type="submit" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default CreateRecipe;
