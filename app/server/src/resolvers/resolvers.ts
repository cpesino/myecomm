import { IDataSources } from "../datasources";

const resolvers = {
    Query: {
        users: async (
            _: any,
            {}: any,
            { dataSources }: { dataSources: IDataSources }
        ) => {
            try {
                return dataSources.userApi.getUsers();
            } catch (error: any) {
                throw error;
            }
        },
    },
};

export { resolvers };
