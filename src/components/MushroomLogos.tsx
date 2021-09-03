import { MushroomDetails } from "../generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSkullCrossbones,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  mushroomDetails: MushroomDetails;
}

const logosMap = {
  dyeing: <FontAwesomeIcon icon={faPalette} />,
  boiling_required: <FontAwesomeIcon icon={faTemperatureHigh} />,
  ffa_recommended: <FontAwesomeIcon icon={faUtensils} />,
  poison_level: {
    1: <FontAwesomeIcon icon={faTimes} />,
    2: new Array(1)
      .fill(null)
      .map((_, i) => <FontAwesomeIcon key={i} icon={faSkullCrossbones} />),
    3: new Array(2)
      .fill(null)
      .map((_, i) => <FontAwesomeIcon key={i} icon={faSkullCrossbones} />),
  },
  taste_rating: {
    0: <FontAwesomeIcon icon={faSquare} />,
    1: <FontAwesomeIcon icon={faStar} />,
    2: new Array(2)
      .fill(null)
      .map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />),
    3: new Array(3)
      .fill(null)
      .map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />),
  },
};

export function MushroomLogos(props: Props) {
  const { mushroomDetails } = props;
  const { dyeing, boiling_required, ffa_recommended } = mushroomDetails;

  console.log(mushroomDetails);
  return (
    <div>
      {dyeing && logosMap.dyeing}
      {boiling_required && logosMap.boiling_required}
      {ffa_recommended && logosMap.ffa_recommended}
      {mushroomDetails.poison_level > 0 &&
        logosMap.poison_level[mushroomDetails.poison_level]}
      {logosMap.taste_rating[mushroomDetails.taste_rating]}
    </div>
  );
}

export default MushroomLogos;
