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
        selectedImgs(id: Int!): SelectedImg!
        imgByQuote(query: String!): [SelectedImg!]!
        imgById(query: Int!): [SelectedImg!]!
        randomSelection: SelectedImg!
    }
`

export const resolvers = {
  Query: {
      imgByQuote: (_, {query}) => {
        if (query == '') {
            return []
        }
        const results = testData.filter(testData => testData.quote.toLowerCase().includes(query.toLowerCase()));
        return results?.map(({ id, episode, timestamp, quote, url }) => ({ id, episode, timestamp, quote, url }));
      },
      imgById: (_, {query}) => {
        if (query == '') {
            return []
        }
        const results = testData.filter(testData => testData.id === query);
        return results?.map(({ id, episode, timestamp, quote, url }) => ({ id, episode, timestamp, quote, url }));
      },
      randomSelection: () => {
        const randomIndex = Math.floor(Math.random() * testData.length);
        return testData[randomIndex];
      },
    }
  }

const testData = [
  {
      "id":1,
      "episode":"S1E1",
      "timestamp":297339,
      "quote": "Test quote 123",
      "url": "/sample_img.jpg"
  },
  {
      "id":2,
      "episode":"S1E2",
      "timestamp":1250166,
      "quote": "Test quote 321",
      "url": "/sample_img.jpg"
  },
  {
      "id":3,
      "episode":"S1E3",
      "timestamp":1250136,
      "quote": "Test quote 456",
      "url": "/sample_img.jpg"
  },
  {
      "id":4,
      "episode":"S1E2",
      "timestamp":125776,
      "quote": "Test quote 654",
      "url": "/sample_img.jpg"
  },
  {
      "id":5,
      "episode":"S1E3",
      "timestamp":125236,
      "quote": "Test quote 789",
      "url": "/sample_img.jpg"
  },
  {
      "id":6,
      "episode":"S1E2",
      "timestamp":1230166,
      "quote": "Test quote 987",
      "url": "/sample_img.jpg"
  },
  {
      "id":7,
      "episode":"S1E3",
      "timestamp":114166,
      "quote": "Test quote 10",
      "url": "/sample_img.jpg"
  },
  {
      "id":8,
      "episode":"S1E3",
      "timestamp":550166,
      "quote": "Test quote 20",
      "url": "/sample_img.jpg"
  },
  {
      "id":9,
      "episode":"S1E3",
      "timestamp":70166,
      "quote": "Test quote 30",
      "url": "/sample_img.jpg"
  },
  {
      "id":10,
      "episode":"S1E3",
      "timestamp":6650166,
      "quote": "Test quote 40",
      "url": "/sample_img.jpg"
  },
  {
      "id":11,
      "episode":"S1E3",
      "timestamp":1254666,
      "quote": "Test quote 50",
      "url": "/sample_img.jpg"
  },
  {
      "id":12,
      "episode":"S1E3",
      "timestamp":1242166,
      "quote": "Test quote 60",
      "url": "/sample_img.jpg"
  }
];

const server = new ApolloServer({
    typeDefs: gqlTypes,
    resolvers,
    cors: {
        origin: [
            'http://localhost:3000',
            'https://studio.apollographql.com'
        ],
        credentials: true,
    },
});

console.log('attempting to start server');
try {
    server.listen({ port: 4000, }).then(({ url }) => {
    console.log(`Server running at ${url}`);
})
} catch(e) {
    console.log(e);
}
