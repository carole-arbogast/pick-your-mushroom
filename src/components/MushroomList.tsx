import { Mushroom } from "../generated/graphql";
import MushroomCard from "./MushroomCard";
import React from "react";
import styled from "styled-components";

interface Props {
  mushrooms: Mushroom[];
}

export function MushroomList(props: Props) {
  const { mushrooms } = props;

  return (
    <>
      <FlexWrapper>
        {mushrooms.length === 0 ? (
          <div>No mushrooms found.</div>
        ) : (
          mushrooms.map((mushroom) => (
            <React.Fragment key={mushroom.id}>
              <MushroomCard mushroom={mushroom} />
            </React.Fragment>
          ))
        )}
      </FlexWrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default MushroomList;
