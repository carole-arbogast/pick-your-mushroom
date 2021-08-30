import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../graphql";

describe("Test suite for GraphQL queries", () => {
  let server: ApolloServer;

  beforeEach(() => {
    server = new ApolloServer({ typeDefs, resolvers });
  });

  describe("Mushrooms", () => {
    it("should return a list of all the mushrooms", async () => {
      const res = await server.executeOperation({
        query: `query Mushrooms {
            mushrooms {
              name, 
            }
          }
          `,
        variables: { id: 1 },
      });

      expect(res.data?.mushrooms.length).toMatchInlineSnapshot(`2`);
    });

    it("should be able to return all the mushrooms' properties", async () => {
      const res = await server.executeOperation({
        query: `query Mushrooms {
            mushrooms {
              id,
              name, 
              description, 
              image
            }
          }
          `,
        variables: { id: 1 },
      });

      expect(res.data?.mushrooms[0]).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        image: expect.any(String),
      });
    });
  });

  describe("Mushroom(id)", () => {
    it("should return a single mushroom", async () => {
      const res = await server.executeOperation({
        query: `query Mushrooms {
            mushroom(id: 1) {
              name
            }
          }
          `,
        variables: { id: 1 },
      });

      expect(res.data?.mushroom.name).toMatchInlineSnapshot(`"Herkkutatti"`);
    });

    it("should be able to return the mushroom's main properties", async () => {
      const res = await server.executeOperation({
        query: `query Mushroom {
            mushroom(id: 1) {
              name, 
              description, 
              image
            }
          }
          `,
        variables: { id: 1 },
      });

      expect(res.data?.mushroom).toMatchObject({
        name: expect.any(String),
        description: expect.any(String),
        image: expect.any(String),
      });
    });

    it("should be able to return the mushroom's details", async () => {
      const res = await server.executeOperation({
        query: `query Mushrooms {
            mushroom(id: 1) {
              mushroomDetails {
                poison_level,
                taste_rating,
                dyeing, 
                ffa_recommended,
                boiling_required
              }
            }
          }
          `,
        variables: { id: 1 },
      });

      expect(res.data?.mushroom.mushroomDetails).toMatchObject({
        poison_level: expect.any(Number),
        taste_rating: expect.any(Number),
        dyeing: expect.any(Boolean),
        ffa_recommended: expect.any(Boolean),
        boiling_required: expect.any(Boolean),
      });
    });
  });
});
