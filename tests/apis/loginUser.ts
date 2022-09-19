import RequestManager from "../../requestsManager";

const { loginUrl } = require("../../url.config");

export default class loginUsers {
  requestManagerInstance: RequestManager;
  loginResponse: any;

  constructor() {
    this.requestManagerInstance = new RequestManager();
    this.loginResponse = {};
  }

  async login(loginData: any) {
    try {
      this.loginResponse = await this.requestManagerInstance.postRequest(
        loginUrl,
        loginData
      );
    } catch (error:any) {
      console.error(`Error occurred in get users: ${error.message}`);
      throw Error(error);
    }
    return this.loginResponse;
  }
}
