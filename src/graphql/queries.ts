import { gql } from "apollo-server-micro";

export const getAllMushrooms = gql`
  query Mushrooms {
    mushrooms {
      name
    }
  }
`;
