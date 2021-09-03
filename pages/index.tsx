import { request } from "graphql-request";

import CreateMushroom from "../src/components/CreateMushroom";
import Modal from "../src/components/Modal";
import MushroomList from "../src/components/MushroomList";
import React from "react";
import useSWR from "swr";
import { getAllMushrooms } from "../src/graphql/queries";
import { Mushroom } from "../src/generated/graphql";
import Page from "../src/components/layouts/Page";
import { Button } from "../src/components/layouts/Button";

export function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const fetcher = async () => await request("/api/graphql", getAllMushrooms);

  interface Result {
    mushrooms: Mushroom[];
  }

  const { data, error } = useSWR<Result>(
    "/api/graphql/getAllMushrooms",
    fetcher
  );

  console.log("data", data, "data.mushroom", data?.mushrooms);

  if (error) {
    console.log("ERROR", error);
    return <div>Error</div>;
  }

  if (!data || !data.mushrooms) {
    console.log("LOADING");
    return <div>Loading</div>;
  }

  return (
    <Page>
      <p>
        Here you can find information about your favorite mushrooms. The
        descriptions are based on [insert book name + link].
      </p>
      <p>This is work in progress. Coming up: </p>
      <ul>
        <li>Filtering mushrooms by edibility, season and location</li>
        <li>Store your recipes </li>
        <li>Save the location of your best, top secret mushroom spots</li>
      </ul>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateMushroom />
        </Modal>
      )}
      <Button onClick={() => setIsModalOpen(true)}>Add a mushroom</Button>
      <MushroomList mushrooms={data.mushrooms} />
    </Page>
  );
}

export default Home;
