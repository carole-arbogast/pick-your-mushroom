import React from "react";
import styled from "styled-components";
import { Mushroom } from "../generated/graphql";

import MushroomCard from "./MushroomCard";

interface Props {
  mushrooms: Mushroom[];
}

export function MushroomList(props: Props) {
  const { mushrooms } = props;

  return (
    <>
      <FlexWrapper>
        {mushrooms.map((mushroom) => (
          <React.Fragment key="mushroom.id">
            <MushroomCard mushroom={mushroom} />
          </React.Fragment>
        ))}
      </FlexWrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;

export default MushroomList;
