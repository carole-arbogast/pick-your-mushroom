import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    mushroom(id: Int!): Mushroom
    mushrooms: [Mushroom!]
  }

  type Mutation {
    createMushroom(data: NestedCreateMushroomInput): Mushroom
    updateMushroom(id: Int!, data: NestedUpdateMushroomInput): Mushroom
    deleteMushroom(id: Int!): Mushroom
  }

  type User {
    name: String
  }

  type MushroomDetails {
    id: Int!
    taste_rating: Int!
    poison_level: Int!
    boiling_required: Boolean
    dyeing: Boolean
    ffa_recommended: Boolean
  }

  type Mushroom {
    id: Int!
    name: String!
    description: String
    image: String
    mushroomDetails: MushroomDetails
    userId: Int!
  }

  input MushroomDetailsInput {
    poison_level: Int
    taste_rating: Int
    dyeing: Boolean
    ffa_recommended: Boolean
    boiling_required: Boolean
  }

  input CreateMushroomInput {
    name: String!
    description: String
    image: String
  }

  input UpdateMushroomInput {
    name: String
    description: String
    image: String
    mushroomDetails: MushroomDetailsInput
  }

  input NestedUpdateMushroomInput {
    mushroom: UpdateMushroomInput
    mushroomDetails: MushroomDetailsInput
    user: Int
  }

  input NestedCreateMushroomInput {
    mushroom: CreateMushroomInput
    mushroomDetails: MushroomDetailsInput!
    user: Int!
  }
`;
