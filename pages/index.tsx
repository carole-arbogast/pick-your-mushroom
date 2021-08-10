import Link from "next/link";

export function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/spots">Mushroom spots</Link>
          </li>
          <li>Login/Log out</li>
        </ul>
      </nav>
      <br></br>
      <div>Search + Filters</div>
      <div>Mushroom list</div>
    </>
  );
}

export default Home;
