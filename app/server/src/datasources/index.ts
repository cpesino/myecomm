import { UserApi } from "./UserApi";

export interface IDataSources {
    userApi: UserApi;
}

export default {
    userApi: new UserApi(),
};
