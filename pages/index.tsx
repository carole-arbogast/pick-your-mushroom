import MushroomList from "../src/components/MushroomList";
import Navbar from "../src/components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <br></br>
      <h1>My Mushrooms</h1>
      <div>Search + Filters</div>
      <MushroomList />
    </>
  );
}

export default Home;
