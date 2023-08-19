import { ApolloServer } from "apollo-server";
import { gqlTypes } from "../types/gql-types";
import { resolvers } from "./resolvers";

import { startStandaloneServer } from '@apollo/server/dist/esm/standalone';

// export const startServer = async () => {
//   const server = new ApolloServer({
//     typeDefs: gqlTypes,
//     resolvers,
//   });

//   // server.listen().then(({ url }: any) => console.log(`Server running at ${url}`));
//   const url = await startStandaloneServer(server, { listen: { port: 5032 } })
//   console.log(`Server running at ${url}`)
// };