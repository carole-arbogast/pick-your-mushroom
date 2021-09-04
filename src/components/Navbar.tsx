import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export function Navbar() {
  return (
    <NavbarWrapper>
      <Container>
        <Link href="/" passHref>
          <HomeLogo>
            <FontAwesomeIcon icon={faHome} size="2x" />
          </HomeLogo>
        </Link>

        <Link href="/" passHref>
          <Title>
            <MushroomLogo>🍄</MushroomLogo> Pick your mushroom
            <MushroomLogo>🍄</MushroomLogo>
          </Title>
        </Link>

        <Github href="https://github.com/carole-arbogast/pick-your-mushroom">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Github>
      </Container>
    </NavbarWrapper>
  );
}

const Title = styled.h1`
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #e0dddd;
  }

  @media (max-width: 480px) {
    margin: 1rem;
  }
`;

const MushroomLogo = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

const HomeLogo = styled.div`
  display: flex;
  align-items: center;
  background: #465e46;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background: #739973;
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarWrapper = styled.nav`
  width: 100%;
  background: #816655;
  display: flex;
  justify-content: center;
  color: white;
`;

const Github = styled.a`
  cursor: pointer;
  color: white;
  &:hover {
    color: #e0dddd;
  }
`;
export default Navbar;
