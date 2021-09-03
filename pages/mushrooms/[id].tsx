import Image from "next/image";
import styled from "styled-components";
import { request } from "graphql-request";
import { getMushroomById } from "../../src/graphql/queries";
import { Mushroom } from "../../src/generated/graphql";
import useSWR from "swr";
import { useRouter } from "next/router";
import MushroomLogos from "../../src/components/MushroomLogos";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Result {
  mushroom: Mushroom;
}

export function MushroomPage() {
  const router = useRouter();

  const fetcher = () =>
    request("/api/graphql", getMushroomById, { id: Number(router.query.id) });

  const { data, error } = useSWR<Result>(
    router.query.id ? "/api/graphql" : null,
    fetcher
  );

  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Header>
        <h1>{data.mushroom.name} </h1>
        <FontAwesomeIcon icon={faEdit} />
      </Header>
      {data.mushroom.mushroomDetails && (
        <MushroomLogos mushroomDetails={data.mushroom.mushroomDetails} />
      )}
      <ImageWrapper>
        <Image
          src={
            data.mushroom?.image ||
            "https://res.cloudinary.com/carole-arbogast/image/upload/v1628941731/800px-Amanita_muscaria__fly_agaric_c0od7x.jpg"
          }
          alt="mushroom-name"
          width={200}
          height={200}
          layout="responsive"
        />
      </ImageWrapper>
      <h2>Description</h2>
      <p>{data.mushroom?.description}</p>

      <h2>[Coming up]</h2>
      <ul>
        <li>Associated recipes</li>
        <li>Where to find it</li>
      </ul>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 15em;
  height: auto;
`;

export default MushroomPage;
