import { ApolloServer, gql } from "apollo-server-micro";
import { typeDefs } from "../../../src/graphql/schema";
import { resolvers } from "../graphql";
import { prisma } from "../../../prisma/db";
import { mushroomDetailsData, mushroomsData } from "./fakeData";
import { Mushroom, User } from "@prisma/client";

describe("Test suite for GraphQL queries", () => {
  let server: ApolloServer;
  let mushrooms: Mushroom[];
  let users: User[];

  beforeAll(() => {
    server = new ApolloServer({
      typeDefs,
      resolvers,
    });
  });

  beforeEach(async () => {
    await prisma.user.create({
      data: {
        username: "Hermione Granger",
      },
    });
    users = await prisma.user.findMany();
    mushrooms = await Promise.all(
      mushroomsData.map((mushroom, i) => {
        const newMushroom = prisma.mushroom.create({
          data: {
            ...mushroom,
            userId: users[0].id,
            mushroomDetails: {
              create: {
                ...mushroomDetailsData[i],
              },
            },
          },
        });
        return newMushroom;
      })
    );
  });

  afterEach(async () => {
    await prisma.mushroomDetails.deleteMany();
    await prisma.mushroom.deleteMany();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("getMushrooms", () => {
    it("should return a list of all the mushrooms", async () => {
      const res = await server.executeOperation({
        query: gql`
          query Mushrooms {
            mushrooms {
              name
            }
          }
        `,
        variables: { id: 1 },
      });

      expect(res.data?.mushrooms.length).toMatchInlineSnapshot(`2`);
    });

    it("should be able to return all the mushrooms' properties", async () => {
      const res = await server.executeOperation({
        query: gql`
          query Mushrooms {
            mushrooms {
              id
              name
              description
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

  describe("getMushroomById", () => {
    it("should return a single mushroom", async () => {
      const id = mushrooms[0].id;
      const res = await server.executeOperation({
        query: gql`
          query Mushrooms($id: Int!) {
            mushroom(id: $id) {
              name
              mushroomDetails {
                poison_level
                taste_rating
                dyeing
                ffa_recommended
                boiling_required
              }
            }
          }
        `,
        variables: { id },
      });

      expect(res.data?.mushroom.name).toMatchInlineSnapshot(`"Herkkutatti"`);
    });

    it("should be able to return the mushroom's main properties", async () => {
      const id = mushrooms[0].id;

      const res = await server.executeOperation({
        query: gql`
          query Mushroom($id: Int!) {
            mushroom(id: $id) {
              name
              description
              image
            }
          }
        `,
        variables: { id },
      });

      expect(res.data?.mushroom).toMatchObject({
        name: expect.any(String),
        description: expect.any(String),
        image: expect.any(String),
      });
    });

    it("should be able to return the mushroom's details", async () => {
      const id = mushrooms[0].id;

      const res = await server.executeOperation({
        query: gql`
          query Mushrooms($id: Int!) {
            mushroom(id: $id) {
              mushroomDetails {
                poison_level
                taste_rating
                dyeing
                ffa_recommended
                boiling_required
              }
            }
          }
        `,
        variables: { id },
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

  describe("createMushroom", () => {
    it("should create a new mushroom", async () => {
      const data = {
        user: users[0].id,
        mushroom: {
          name: "Mushroom",
          description: "cool mushroom",
          image: "/link/to/image",
        },
        mushroomDetails: { taste_rating: 3, poison_level: 0 },
      };
      const res = await server.executeOperation({
        query: gql`
          mutation CreateMushroom($data: NestedCreateMushroomInput) {
            createMushroom(data: $data) {
              name
              description
              image
            }
          }
        `,
        variables: {
          data,
        },
      });
      const newMushroom = res.data?.createMushroom;

      expect(newMushroom).toMatchObject({
        name: data.mushroom.name,
        description: data.mushroom.description,
        image: data.mushroom.image,
      });
    });

    it("should create the corresponding mushroom details", async () => {
      const data = {
        user: users[0].id,
        mushroom: {
          name: "Mushroom with details",
        },
        mushroomDetails: {
          taste_rating: 3,
          poison_level: 3,
          dyeing: false,
          ffa_recommended: true,
          boiling_required: true,
        },
      };
      const res = await server.executeOperation({
        query: gql`
          mutation CreateMushroom($data: NestedCreateMushroomInput) {
            createMushroom(data: $data) {
              name
              mushroomDetails {
                taste_rating
                poison_level
                dyeing
                ffa_recommended
                boiling_required
              }
            }
          }
        `,
        variables: {
          data,
        },
      });

      const mushroomDetails = res.data?.createMushroom.mushroomDetails;
      const { mushroomDetails: expectedMushroomDetails } = data;

      expect(mushroomDetails).toMatchObject({
        taste_rating: expectedMushroomDetails.taste_rating,
        poison_level: expectedMushroomDetails.poison_level,
        dyeing: expectedMushroomDetails.dyeing,
        ffa_recommended: expectedMushroomDetails.ffa_recommended,
        boiling_required: expectedMushroomDetails.boiling_required,
      });
    });
  });

  describe("updateMushroom", () => {
    it("should update a mushroom", async () => {
      const id = mushrooms[0].id;

      const data = {
        mushroom: {
          name: "Updated Mushroom",
          description: "Updated description",
          image: "Updated image",
        },
      };

      const res = await server.executeOperation({
        query: gql`
          mutation UpdateMushroom($id: Int!, $data: NestedUpdateMushroomInput) {
            updateMushroom(id: $id, data: $data) {
              name
              description
              image
            }
          }
        `,
        variables: {
          data,
          id,
        },
      });

      const updatedMushroom = res.data?.updateMushroom;

      expect(updatedMushroom).toMatchInlineSnapshot(`
Object {
  "description": "Updated description",
  "image": "Updated image",
  "name": "Updated Mushroom",
}
`);
    });
    it("should update the corresponding mushroom details", async () => {
      const id = mushrooms[0].id;

      const data = {
        mushroomDetails: {
          poison_level: 4,
          taste_rating: 4,
          dyeing: true,
          ffa_recommended: false,
          boiling_required: false,
        },
      };

      const res = await server.executeOperation({
        query: gql`
          mutation UpdateMushroom($id: Int!, $data: NestedUpdateMushroomInput) {
            updateMushroom(id: $id, data: $data) {
              mushroomDetails {
                taste_rating
                poison_level
                dyeing
                ffa_recommended
                boiling_required
              }
            }
          }
        `,
        variables: {
          data,
          id,
        },
      });

      const updatedMushroom = res.data?.updateMushroom;
      console.log(updatedMushroom);

      expect(updatedMushroom.mushroomDetails).toMatchInlineSnapshot(`
Object {
  "boiling_required": false,
  "dyeing": true,
  "ffa_recommended": false,
  "poison_level": 4,
  "taste_rating": 4,
}
`);
    });
  });

  describe("deleteMushroom", () => {
    it("should delete a mushroom", async () => {
      const id = mushrooms[0].id;

      const res = await server.executeOperation({
        query: gql`
          mutation DeleteMushroom($id: Int!) {
            deleteMushroom(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      });

      const deletedMushroom = await prisma.mushroom.findUnique({
        where: { id },
      });

      expect(deletedMushroom).toBeNull();
      expect(res.data?.deleteMushroom.id).toEqual(id);
    });
    it("should delete the corresponding mushroom information", async () => {
      const id = mushrooms[0].id;

      const originalMushroomDetails = await prisma.mushroomDetails.findUnique({
        where: { mushroomId: id },
      });

      expect(originalMushroomDetails).toBeDefined();

      await server.executeOperation({
        query: gql`
          mutation DeleteMushroom($id: Int!) {
            deleteMushroom(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      });

      const deletedMushroomDetails = await prisma.mushroomDetails.findUnique({
        where: { mushroomId: id },
      });

      expect(deletedMushroomDetails).toBeNull();
    });
  });
});
