import { ApolloServer, gql } from "apollo-server-micro";
import {
  getMushrooms,
  getMushroomById,
  createMushroom,
  updateMushroom,
  deleteMushroom,
} from "./resolvers";

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
    user: Int
    name: String!
    description: String
  }

  input UpdateMushroomInput {
    name: String
    description: String
    mushroomDetails: MushroomDetailsInput
  }

  input NestedUpdateMushroomInput {
    mushroom: UpdateMushroomInput
    mushroomDetails: MushroomDetailsInput
    user: Int
  }

  input NestedCreateMushroomInput {
    mushroom: CreateMushroomInput
    mushroomDetails: MushroomDetailsInput
    user: Int!
  }
`;

export const resolvers = {
  Query: {
    mushroom: getMushroomById,
    mushrooms: getMushrooms,
  },
  Mutation: {
    createMushroom,
    updateMushroom,
    deleteMushroom,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
