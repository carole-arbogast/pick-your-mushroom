import { gql } from "apollo-server-micro";

export const getAllMushrooms = gql`
  query Mushrooms {
    mushrooms {
      id
      name
      description
      image
      mushroomDetails {
        poison_level
        taste_rating
        dyeing
        boiling_required
        ffa_recommended
      }
    }
  }
`;

export const getMushroomById = gql`
  query Mushroom($id: Int!) {
    mushroom(id: $id) {
      id
      name
      description
      image
      mushroomDetails {
        poison_level
        taste_rating
        dyeing
        boiling_required
        ffa_recommended
      }
    }
  }
`;
