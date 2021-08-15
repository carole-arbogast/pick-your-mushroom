import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export function Recipe() {
  return (
    <div>
      <h1>Mushroom soup</h1>
      <p>Tatti, suppilos</p>
      <ImageWrapper>
        <Image
          src="https://res.cloudinary.com/carole-arbogast/image/upload/v1629011441/96ccff9b-fe23-4e52-add4-0e5d4f5159a3_pv1cdo.jpg"
          alt="mushroom-name"
          width={200}
          height={200}
          layout="responsive"
        />
      </ImageWrapper>
      <h2>Ingredients</h2>
      <ul>
        <li>
          <Link href="/mushrooms/1">Tatti</Link>
        </li>
        <li>Suppilo</li>
        <li>Cream</li>
        <li>Potatoes</li>
      </ul>

      <h2>Instructions</h2>
      <p>Cook the mushrooms and potatoes, mix with the cream.</p>
    </div>
  );
}

const ImageWrapper = styled.div`
  width: 15em;
  height: auto;
`;

export default Recipe;
