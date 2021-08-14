import Image from "next/image";
import styled from "styled-components";

export function Mushroom() {
  return (
    <div>
      <h1>Mushroom Name</h1>
      <p>Deadly</p>
      <ImageWrapper>
        <Image
          src="https://res.cloudinary.com/carole-arbogast/image/upload/v1628941731/800px-Amanita_muscaria__fly_agaric_c0od7x.jpg"
          alt="mushroom-name"
          width={200}
          height={200}
          layout="responsive"
        />
      </ImageWrapper>
      <p>When: June-September</p>
      <p>Terrain: humid, near Minecraft trees</p>
      <p>Appearance: description of the mushroom</p>
      <p>Recipes</p>
      <ul>
        <li>Deadly pasta</li>
        <li>Murderous soup</li>
      </ul>
      <p>Similar mushrooms: N/A</p>
      <p>Spots: [insert Google map here]</p>
    </div>
  );
}

const ImageWrapper = styled.div`
  width: 15em;
  height: auto;
`;

export default Mushroom;
