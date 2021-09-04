import {
  FieldGroup,
  Form,
  Label,
  Required,
  Select,
  TextArea,
} from "./layouts/forms";
import { Mushroom, NestedCreateMushroomInput } from "../generated/graphql";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./layouts/Button";
import React from "react";
import { createMushroom } from "../graphql/queries";
import { mutate } from "swr";
import { request } from "graphql-request";
import styled from "styled-components";

interface Props {
  onClose: () => void;
}

type Inputs = {
  name: string;
  taste: "0" | "1" | "2" | "3";
  toxicity: "0" | "1" | "2" | "3";
  season: string[];
  description?: string;
  image?: string;
  boiling_required?: boolean;
};

export function CreateMushroom(props: Props) {
  const { onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const [error, setError] = React.useState<boolean>();

  const handleCreateMushroom = async (
    data: NestedCreateMushroomInput
  ): Promise<Mushroom> => request("/api/graphql", createMushroom, { data });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {
      name,
      description,
      toxicity,
      taste,
      image,
      boiling_required,
    } = data;

    const imageDomain = image?.slice(0, 27);
    const cloudinaryDomain = "https://res.cloudinary.com/";

    try {
      await handleCreateMushroom({
        mushroom: {
          name,
          description,
          image: imageDomain === cloudinaryDomain ? image : null,
        },
        user: 1,
        mushroomDetails: {
          poison_level: Number(toxicity),
          taste_rating: Number(taste),
          boiling_required,
        },
      });

      mutate("/api/graphql/getAllMushrooms");
      onClose();
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <p>
        <em>
          Note: the functionality to edit and delete a mushroom is not
          implemented yet. You will not be able to make modifications
          afterwards.
        </em>
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Label>
            Name <Required>*</Required>
          </Label>
          <input {...register("name", { required: true })}></input>
          {errors.name && (
            <ValidationMessage>This field is required</ValidationMessage>
          )}
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

        {Number(watch("taste")) > 0 && (
          <Label>
            Boiling required{" "}
            <input {...register("boiling_required")} type="checkbox"></input>
          </Label>
        )}

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
          <Note>For now, only images hosted on Cloudinary will work.</Note>
        </FieldGroup>

        <FieldGroup>
          <Label>Description</Label>
          <TextArea {...register("description")}></TextArea>
        </FieldGroup>

        {/* TODO add fields about mushroom dyeing + ffa recommendation */}

        {error && <p>Something went wrong. </p>}

        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25em;
`;

const ValidationMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  padding-top: 0.25rem;
`;

const Note = styled.span`
  font-size: 0.75em;
  padding-top: 0.25rem;
  color: orange;
`;

export default CreateMushroom;
