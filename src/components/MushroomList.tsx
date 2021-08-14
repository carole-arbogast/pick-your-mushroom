import styled from "styled-components";

import MushroomCard from "./MushroomCard";

export function MushroomList() {
  return (
    <>
      <FlexWrapper>
        <MushroomCard />
        <MushroomCard />
      </FlexWrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;

export default MushroomList;
