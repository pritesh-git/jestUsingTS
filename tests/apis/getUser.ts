import RequestManager from "../../requestsManager";

const { userUrl, unknownUrl } = require("../../url.config");

export default class getUsers {
  requestManagerInstance: RequestManager;
  usersList: any;

  constructor() {
    this.requestManagerInstance = new RequestManager();
    this.usersList = {};
  }

  async getSingleUser(userId: number) {
    try {
      this.usersList = await this.requestManagerInstance.getRequest(
        `${userUrl}/${userId}`,
        null
      );
    } catch (error:any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.usersList;
  }

  async getUser(userId: number) {
    try {
      this.usersList = await this.requestManagerInstance.getRequest(
        `${unknownUrl}/${userId}`,
        null
      );
    } catch (error:any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.usersList;
  }

  async getPageUsers(pageNumber: number) {
    try {
      this.usersList = await this.requestManagerInstance.getRequest(
        `${userUrl}?page=${pageNumber}`,
        null
      );
    } catch (error:any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.usersList;
  }

  async getListUsers() {
    try {
      this.usersList = await this.requestManagerInstance.getRequest(
        unknownUrl,
        null
      );
    } catch (error:any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.usersList;
  }
}
