import RequestManager from "../../requestsManager";

const { userUrl } = require("../../url.config");

export default class updateUser {
  requestManagerInstance: RequestManager;
  updateResponse: any;

  constructor() {
    this.requestManagerInstance = new RequestManager();
    this.updateResponse = {};
  }

  async updateInfo(userId: number, updateData: any) {
    try {
      this.updateResponse = await this.requestManagerInstance.putRequest(
        `${userUrl}/${userId}`,
        updateData
      );
    } catch (error: any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.updateResponse;
  }
}
