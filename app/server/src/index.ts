import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/index";
import typeDefs from "./schema/index";
import datasources from "./datasources";
import { IDataSourceContext } from "./common";
import 'dotenv/config';

console.log(process.env.GRAPHQL_API_URL);

const server = new ApolloServer<IDataSourceContext>({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
        return {
            dataSources: datasources,
        };
    },
    listen: { port: 5000 },
});

console.log(`🚀  Server ready at: ${url}`);
