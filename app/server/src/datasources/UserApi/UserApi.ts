import { RESTDataSource } from "@apollo/datasource-rest";

export class UserApi extends RESTDataSource {
  baseURL = "http://localhost:8080";

  public async getUsers(): Promise<any> {
    const response = await this.get("/v1/users");
    return response.users;
  }
}
