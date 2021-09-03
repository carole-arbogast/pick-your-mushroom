import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export function RecipeCard() {
  return (
    <CardWrapper>
      <CardHeader>
        <h2>Mushroom soup</h2>
        <p>Tatti, suppilos</p>
      </CardHeader>
      <Image
        src="https://res.cloudinary.com/carole-arbogast/image/upload/v1629011441/96ccff9b-fe23-4e52-add4-0e5d4f5159a3_pv1cdo.jpg"
        alt="mushroom-name"
        width={200}
        height={200}
        layout="responsive"
      />
      <Link href="/recipes/1">View Recipe</Link>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RecipeCard;
