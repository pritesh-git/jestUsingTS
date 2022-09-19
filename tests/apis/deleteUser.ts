import RequestManager from "../../requestsManager";

const { userUrl } = require("../../url.config");

export default class deleteUser {
  requestManagerInstance: RequestManager;
  deleteResponse: any;

  constructor() {
    this.requestManagerInstance = new RequestManager();
    this.deleteResponse = {};
  }

  async deleteUser(userId: any) {
    try {
      this.deleteResponse = await this.requestManagerInstance.deleteRequest(
        `${userUrl}/${userId}`,
        null
      );
    } catch (error: any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.deleteResponse;
  }
}
