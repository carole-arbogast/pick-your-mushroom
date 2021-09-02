import styled from "styled-components";

import MushroomCard from "./MushroomCard";

interface Props {
  mushrooms: { name: string }[];
}

export function MushroomList(props: Props) {
  const { mushrooms } = props;
  console.log(mushrooms);

  return (
    <>
      <FlexWrapper>
        {mushrooms.map((mushroom) => (
          <p key="mushroom">{mushroom.name}</p>
        ))}
        {/* <MushroomCard />
        <MushroomCard /> */}
      </FlexWrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;

export default MushroomList;
