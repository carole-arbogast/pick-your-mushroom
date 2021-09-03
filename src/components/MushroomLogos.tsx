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
import { MushroomDetails } from "../generated/graphql";
import styled from "styled-components";

interface Props {
  mushroomDetails: MushroomDetails;
}

const StyledFontawesomeIcon = styled(FontAwesomeIcon)`
  padding: 0.25rem;
`;

const logosMap = {
  dyeing: <StyledFontawesomeIcon icon={faPalette} color={"purple"} />,
  boiling_required: (
    <StyledFontawesomeIcon icon={faTemperatureHigh} color="orange" />
  ),
  ffa_recommended: <StyledFontawesomeIcon icon={faUtensils} color="green" />,
  poison_level: {
    1: <StyledFontawesomeIcon icon={faTimes} color="#d61609" />,
    2: new Array(1)
      .fill(null)
      .map((_, i) => (
        <StyledFontawesomeIcon
          key={i}
          icon={faSkullCrossbones}
          color="#d61609"
        />
      )),
    3: new Array(2)
      .fill(null)
      .map((_, i) => (
        <StyledFontawesomeIcon
          key={i}
          icon={faSkullCrossbones}
          color="#d61609"
        />
      )),
  },
  taste_rating: {
    1: <StyledFontawesomeIcon icon={faStar} color="gold" />,
    2: new Array(2)
      .fill(null)
      .map((_, i) => (
        <StyledFontawesomeIcon key={i} icon={faStar} color="gold" />
      )),
    3: new Array(3)
      .fill(null)
      .map((_, i) => (
        <StyledFontawesomeIcon key={i} icon={faStar} color="gold" />
      )),
  },
  worthless_mushroom: <StyledFontawesomeIcon icon={faSquare} color="grey" />,
};

export function MushroomLogos(props: Props) {
  const { mushroomDetails } = props;
  const {
    dyeing,
    boiling_required,
    ffa_recommended,
    poison_level,
    taste_rating,
  } = mushroomDetails;

  const isWorthlessMushroom = taste_rating === 0 && poison_level === 0;

  return (
    <Wrapper>
      {dyeing && logosMap.dyeing}
      {boiling_required && logosMap.boiling_required}
      {ffa_recommended && logosMap.ffa_recommended}
      {logosMap.poison_level[poison_level]}
      {logosMap.taste_rating[taste_rating]}
      {isWorthlessMushroom && logosMap.worthless_mushroom}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px grey solid;
  border-radius: 3px;
  margin-top: 0.5rem;
  background: white;
`;

export default MushroomLogos;
