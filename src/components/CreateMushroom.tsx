import { SubmitHandler, useForm } from "react-hook-form";

import styled from "styled-components";

type Inputs = {
  name: string;
  edible: string;
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name", { required: true })}></input>

      <label>Image Link</label>
      <input {...register("image")}></input>

      <label>Edible/poisonous</label>
      <select defaultValue="edible" {...register("edible")}>
        <option value="delicious">Delicious</option>
        <option value="edible">Edible</option>
        <option value="poisonous">Poisonous</option>
      </select>

      <label>Season</label>

      <label>July</label>
      <input type="checkbox" {...register("season")} value="july"></input>

      <label>August</label>
      <input type="checkbox" {...register("season")} value="august"></input>

      <label>September</label>
      <input type="checkbox" {...register("season")} value="june"></input>

      <label>Description</label>
      <textarea {...register("description")}></textarea>

      {errors.name && <span>This field is required</span>}

      <input type="submit" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default CreateMushroom;
