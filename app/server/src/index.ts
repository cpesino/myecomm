import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import datasources from "./datasources";
import { IDataSourceContext } from "./common";

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
