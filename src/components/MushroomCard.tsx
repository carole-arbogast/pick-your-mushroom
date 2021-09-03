import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Mushroom } from "../generated/graphql";
import MushroomLogos from "./MushroomLogos";

interface Props {
  mushroom: Mushroom;
}

export function MushroomCard(props: Props) {
  const { mushroom } = props;

  return (
    <CardWrapper>
      <CardHeader>
        <h2>{mushroom.name}</h2>
        {mushroom.mushroomDetails && (
          <MushroomLogos mushroomDetails={mushroom.mushroomDetails} />
        )}
        <ImageWrapper>
          <Image
            src={
              mushroom.image
                ? mushroom.image
                : // FIXME add a better placeholder image
                  "https://res.cloudinary.com/carole-arbogast/image/upload/v1628941731/800px-Amanita_muscaria__fly_agaric_c0od7x.jpg"
            }
            alt="mushroom-name"
            width={200}
            height={200}
            layout="responsive"
          />
        </ImageWrapper>
      </CardHeader>
      <p>{mushroom.description}</p>
      <Link href={`/mushrooms/${mushroom.id}`}> View More </Link>
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
