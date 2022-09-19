import RequestManager from "../../requestsManager";

const { registerUrl, userUrl } = require("../../url.config");

export default class registerUsers {
  requestManagerInstance: RequestManager;
  registerResponse: any;

  constructor() {
    this.requestManagerInstance = new RequestManager();
    this.registerResponse = {};
  }

  async register(registerData: any) {
    try {
      this.registerResponse = await this.requestManagerInstance.postRequest(
        registerUrl,
        registerData
      );
    } catch (error: any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.registerResponse;
  }

  async createUser(userData: any) {
    try {
      this.registerResponse = await this.requestManagerInstance.postRequest(
        userUrl,
        userData
      );
    } catch (error: any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.registerResponse;
  }
}
