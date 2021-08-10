import Link from "next/link";
import Navbar from "../src/components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <br></br>
      <div>Search + Filters</div>
      <div>Mushroom list</div>
    </>
  );
}

export default Home;
