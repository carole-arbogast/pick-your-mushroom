import styled from "styled-components";
import Link from "next/link";

export function Navbar() {
  return (
    <NavbarWrapper>
      <Title>
        <Link href="/">Mushrooms</Link>
      </Title>
      <Navigation>
        <NavigationItem>
          <Link href="/recipes">Recipes</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/spots">Mushroom spots</Link>
        </NavigationItem>
        <NavigationItem>Login/Log out</NavigationItem>
      </Navigation>
    </NavbarWrapper>
  );
}

const Title = styled.h1`
  color: grey;
`;

const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavigationItem = styled.li`
  margin: 0 0.5rem;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: lightgreen;
`;

export default Navbar;
