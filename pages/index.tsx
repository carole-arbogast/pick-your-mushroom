import { request } from "graphql-request";

import CreateMushroom from "../src/components/CreateMushroom";
import Modal from "../src/components/Modal";
import MushroomList from "../src/components/MushroomList";
import React from "react";
import useSWR from "swr";
import { getAllMushrooms } from "../src/graphql/queries";
import { Mushroom } from "../src/generated/graphql";

export function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const fetcher = () => request("/api/graphql", getAllMushrooms);

  interface Result {
    mushrooms: Mushroom[];
  }

  const { data, error } = useSWR<Result>("/api/graphql", fetcher);

  return (
    <>
      {error && <div>Oops</div>}
      <h1>My Mushrooms</h1>
      <div>Search + Filters</div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateMushroom />
        </Modal>
      )}
      <button onClick={() => setIsModalOpen(true)}>Add mushroom</button>
      {data?.mushrooms && <MushroomList mushrooms={data.mushrooms} />}
    </>
  );
}

export default Home;
