import { ApolloServer, gql } from "apollo-server-micro";
import { mushrooms, mushroom } from "./resolvers";

export const typeDefs = gql`
  type Query {
    mushroom(id: Int!): Mushroom
    mushrooms: [Mushroom!]
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
  }
`;

export const resolvers = {
  Query: {
    mushroom,
    mushrooms,
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
