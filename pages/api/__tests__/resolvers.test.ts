import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../graphql";

describe("Test suite for GraphQL resolvers", () => {
  let server: ApolloServer;

  beforeEach(() => {
    server = new ApolloServer({ typeDefs, resolvers });
  });

  it("testing tests", async () => {
    const res = await server.executeOperation({
      query: `query Mushrooms {
          mushrooms {
            name
          }
        }
        `,
      variables: { id: 1 },
    });
    console.log(res.data?.mushrooms[0].name);
  });
});
