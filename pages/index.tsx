import { gql, request } from "graphql-request";

import CreateMushroom from "../src/components/CreateMushroom";
import Modal from "../src/components/Modal";
import MushroomList from "../src/components/MushroomList";
import React from "react";
import useSWR from "swr";

export function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const getMushroomsQuery = `{
    mushrooms {
      name
      description
    }
  }`;

  const fetcher = (query) => request("/api/graphql", query);

  const { data, error } = useSWR(getMushroomsQuery, fetcher);

  console.log(data, error);

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
      {data && <MushroomList mushrooms={data.mushrooms} />}
    </>
  );
}

export default Home;
