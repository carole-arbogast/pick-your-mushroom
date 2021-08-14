import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function MushroomCard() {
  return (
    <CardWrapper>
      <CardHeader>
        <h2>Mushroom name</h2>
        <FontAwesomeIcon icon={faSkullCrossbones} />
        <ImageWrapper>
          <Image
            src="https://res.cloudinary.com/carole-arbogast/image/upload/v1628941731/800px-Amanita_muscaria__fly_agaric_c0od7x.jpg"
            alt="mushroom-name"
            width={200}
            height={200}
            layout="responsive"
          />
        </ImageWrapper>
      </CardHeader>
      <p>When: July-September</p>
      <p>Spots: 2</p>
      <Link href="/mushrooms/1"> View More </Link>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const CardHeader = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 10em;
  height: auto;
`;

export default MushroomCard;
