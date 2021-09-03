import Image from "next/image";
import Link from "next/link";
import { Mushroom } from "../generated/graphql";
import MushroomLogos from "./MushroomLogos";
import styled from "styled-components";

interface Props {
  mushroom: Mushroom;
}

export function MushroomCard(props: Props) {
  const { mushroom } = props;

  const mushroomDescription = mushroom.description
    ? mushroom.description.length > 100
      ? `${mushroom.description.slice(0, 100)}...`
      : mushroom.description
    : "No description available.";

  return (
    <CardWrapper>
      <CardHeader>
        <Title>{mushroom.name}</Title>
        <ImageWrapper>
          <Image
            src={
              mushroom.image
                ? mushroom.image
                : "https://res.cloudinary.com/carole-arbogast/image/upload/v1630656479/fall-1293016_640_jdjjm8.png"
            }
            alt="mushroom-name"
            width={150}
            height={150}
            layout="responsive"
          />
        </ImageWrapper>
        {mushroom.mushroomDetails && (
          <MushroomLogos mushroomDetails={mushroom.mushroomDetails} />
        )}
      </CardHeader>
      <p>{mushroomDescription}</p>
      <Link href={`/mushrooms/${mushroom.id}`}> View More </Link>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 15em;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #faf7f5;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 0.25rem;
  margin: 0;
  font-size: 1rem;
  border-bottom: 1px solid grey;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 10em;
  height: auto;
  padding-top: 0.5rem;
  align-self: center;
`;

export default MushroomCard;
