import React from "react";
import styled from "styled-components";
import RecipeCard from "../../src/components/RecipeCard";
import Modal from "../../src/components/Modal";
import CreateRecipe from "../../src/components/CreateRecipe";

export function Recipes() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <h1>Recipes</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Recipe</button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateRecipe />
        </Modal>
      )}
      <FlexWrapper>
        <RecipeCard />
      </FlexWrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;

export default Recipes;
