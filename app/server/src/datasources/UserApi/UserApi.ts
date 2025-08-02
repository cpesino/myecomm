import { RESTDataSource } from "@apollo/datasource-rest";

export class UserApi extends RESTDataSource {
    baseURL = "http://localhost:4000";

    public async getUsers(): Promise<boolean> {
        return await true;
    }
}
