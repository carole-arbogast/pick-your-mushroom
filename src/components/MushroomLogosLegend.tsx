import {
  faPalette,
  faSkullCrossbones,
  faSquare,
  faStar,
  faTemperatureHigh,
  faTimes,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export function MushroomLogosLegend() {
  return (
    <Wrapper>
      <h3>Mushroom edibility </h3>
      <List>
        <li>
          <StyledFontawesomeIcon icon={faStar} color="gold" />
          Edible
        </li>
        <li>
          <StyledFontawesomeIcon icon={faStar} color="gold" />
          <StyledFontawesomeIcon icon={faStar} color="gold" />
          Good
        </li>
        <li>
          <StyledFontawesomeIcon icon={faStar} color="gold" />
          <StyledFontawesomeIcon icon={faStar} color="gold" />
          <StyledFontawesomeIcon icon={faStar} color="gold" />
          Delicious
        </li>

        <li>
          <StyledFontawesomeIcon icon={faTimes} color="#d61609" />
          Toxic
        </li>
        <li>
          <StyledFontawesomeIcon icon={faSkullCrossbones} color="#d61609" />
          Dangerously toxic
        </li>
        <li>
          <StyledFontawesomeIcon icon={faSkullCrossbones} color="#d61609" />
          <StyledFontawesomeIcon icon={faSkullCrossbones} color="#d61609" />
          Deadly
        </li>
        <li>
          <StyledFontawesomeIcon icon={faSquare} color="grey" />
          Not toxic, but bad taste
        </li>
        <li>
          <StyledFontawesomeIcon icon={faTemperatureHigh} color="orange" />
          Needs to be boiled before consuming
        </li>
        <li>
          <StyledFontawesomeIcon icon={faPalette} color="purple" />
          Can be used as mushroom dye
        </li>
        <li>
          <StyledFontawesomeIcon icon={faUtensils} color="green" />
          Recommended by the Finnish Food Authority
        </li>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 1rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & > li {
    font-size: 0.85rem;
    padding: 0.25rem;
  }
`;

const StyledFontawesomeIcon = styled(FontAwesomeIcon)`
  padding-right: 0.25rem;
`;

export default MushroomLogosLegend;
