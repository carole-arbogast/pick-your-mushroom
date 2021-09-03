import Image from "next/image";
import styled from "styled-components";
import { request } from "graphql-request";
import { getMushroomById } from "../../src/graphql/queries";
import { Mushroom } from "../../src/generated/graphql";
import useSWR from "swr";
import { useRouter } from "next/router";
import MushroomLogos from "../../src/components/MushroomLogos";
import Page from "../../src/components/layouts/Page";
import MushroomLogosLegend from "../../src/components/MushroomLogosLegend";

interface Result {
  mushroom: Mushroom;
}

export function MushroomPage() {
  const router = useRouter();

  const fetcher = () =>
    request("/api/graphql", getMushroomById, { id: Number(router.query.id) });

  const { data, error } = useSWR<Result>(
    router.query.id ? `/api/graphql/mushroom?id=${router.query.id}` : null,
    fetcher
  );

  if (error) {
    console.log("ERROR", error);
    return <div>Error</div>;
  }
  if (!data || !data.mushroom) {
    return <div>Loading</div>;
  }
  return (
    <Page>
      <FlexWrapper>
        <MushroomInfo>
          <Main>
            <Header>
              <h2>{data.mushroom.name} </h2>
              {/* <FontAwesomeIcon icon={faEdit} /> */}
            </Header>
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
          </Main>

          <Description>
            {data.mushroom.mushroomDetails && (
              <Edibility>
                <MushroomLogos
                  mushroomDetails={data.mushroom.mushroomDetails}
                />
              </Edibility>
            )}
            <h3>Description</h3>
            <p>{data.mushroom?.description}</p>

            <h3>[Coming up]</h3>
            <ul>
              <li>Associated recipes</li>
              <li>Where and when to find it</li>
            </ul>
          </Description>
        </MushroomInfo>
        <SideBox>
          <MushroomLogosLegend />
        </SideBox>
      </FlexWrapper>
    </Page>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MushroomInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100mm;
  flex-grow: 2;
  flex-wrap: wrap;
  margin-right: 2rem;
`;

const Edibility = styled.div`
  align-self: flex-start;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBox = styled.div`
  align-self: center;
  margin-top: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 15em;
  height: auto;
`;

export default MushroomPage;
