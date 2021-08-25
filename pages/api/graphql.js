import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    mushroom: Mushroom!
    mushrooms: [Mushroom!]!
  }
  type User {
    name: String
  }
  type Mushroom {
    name: String
    category: String
  }
`;

const mushroom = { name: "Herkkutatti", category: "Tatti" };

const resolvers = {
  Query: {
    mushrooms() {
      return [mushroom];
    },
    mushroom() {
      return mushroom;
    },
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
