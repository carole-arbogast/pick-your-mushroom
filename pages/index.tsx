import React from "react";
import Modal from "../src/components/Modal";
import CreateMushroom from "../src/components/CreateMushroom";
import MushroomList from "../src/components/MushroomList";

export function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <h1>My Mushrooms</h1>
      <div>Search + Filters</div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateMushroom />
        </Modal>
      )}
      <button onClick={() => setIsModalOpen(true)}>Add mushroom</button>
      <MushroomList />
    </>
  );
}

export default Home;
