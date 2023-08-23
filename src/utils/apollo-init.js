import { ApolloServer } from "apollo-server";

const gqlTypes = `#graphql    
    type SelectedImg {
        id: Int!
        episode: String!
        timestamp: Int!
        quote: String!
        url: String!
    }

    type Query {
        selectedImgs: [SelectedImg!]!
    }
`

export const resolvers = {
  Query: {
      selectedImgs: () => testData
  }
}

export const testData = [
  {
      "id":1,
      "episode":"S1E1",
      "timestamp":297339,
      "quote": "Test quote 123",
  },
  {
      "id":2,
      "episode":"S1E2",
      "timestamp":1250166,
      "quote": "Test quote 321",
  },
  {
      "id":3,
      "episode":"S1E3",
      "timestamp":1250136,
      "quote": "Test quote 456",
  },
  {
      "id":4,
      "episode":"S1E2",
      "timestamp":125776,
      "quote": "Test quote 654",
  },
  {
      "id":5,
      "episode":"S1E3",
      "timestamp":125236,
      "quote": "Test quote 789",
  },
  {
      "id":6,
      "episode":"S1E2",
      "timestamp":1230166,
      "quote": "Test quote 987",
  },
  {
      "id":7,
      "episode":"S1E3",
      "timestamp":114166,
      "quote": "Test quote 10",
  },
  {
      "id":8,
      "episode":"S1E3",
      "timestamp":550166,
      "quote": "Test quote 20",
  },
  {
      "id":9,
      "episode":"S1E3",
      "timestamp":70166,
      "quote": "Test quote 30",
  },
  {
      "id":10,
      "episode":"S1E3",
      "timestamp":6650166,
      "quote": "Test quote 40",
  },
  {
      "id":11,
      "episode":"S1E3",
      "timestamp":1254666,
      "quote": "Test quote 50",
  },
  {
      "id":12,
      "episode":"S1E3",
      "timestamp":1242166,
      "quote": "Test quote 60",
  }
];

const server = new ApolloServer({
    typeDefs: gqlTypes,
    resolvers,
});

console.log('attempting to start server');
try {

    server.listen({ port: 4000, }).then(({ url }) => {
    console.log(`Server running at ${url}`);
})
} catch(e) {
    console.log(e);
}
