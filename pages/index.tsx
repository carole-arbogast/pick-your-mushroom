import { request } from "graphql-request";

import Modal from "../src/components/Modal";
import MushroomList from "../src/components/MushroomList";
import React from "react";
import useSWR from "swr";
import { getAllMushrooms } from "../src/graphql/queries";
import { Mushroom } from "../src/generated/graphql";
import Page from "../src/components/layouts/Page";
import MushroomLogosLegend from "../src/components/MushroomLogosLegend";

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
    return <div>Loading</div>;
  }

  return (
    <Page>
      <p>
        Here you can find information about mushrooms that can be found in
        Finland.
      </p>
      <p>
        The descriptions are based on the mushroom guide{" "}
        <em>SIENIOPAS - Taskukirja sienten tunnistukseen</em> by Jarkko
        Korhonen.
      </p>
      <p>This is a work in progress. Coming up: </p>
      <ul>
        <li>Adding your own mushrooms</li>
        <li>Filtering mushrooms by edibility, season and location</li>
        <li>Store your recipes </li>
        <li>Save the location of your best, top secret mushroom spots</li>
      </ul>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <MushroomLogosLegend />
        </Modal>
      )}
      <h2>Mushroom list</h2>
      {/* <Button onClick={() => setIsModalOpen(true)}>Add a mushroom</Button> */}
      <MushroomList mushrooms={data.mushrooms} />
    </Page>
  );
}

export default Home;
