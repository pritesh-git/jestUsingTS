const Axios = require("axios");

async function axiosWrapper(configs: any) {
  try {
    return await Axios(configs);
  } catch (error:any) {
    if (error.response) {
      return error.response;
    }
    throw error;
  }
}

export default class RequestManager {

  async request(url: string, method: string, payload: any) {
    return axiosWrapper({
      method,
      url,
      data: payload,
    });
  }

  async putRequest(url: string, payload: any) {
    return this.request(url, "put", payload);
  }

  async postRequest(url: string, payload: any) {
    return this.request(url, "post", payload);
  }

  async getRequest(url: string, payload: null) {
    return this.request(url, "get", payload);
  }

  async deleteRequest(url: string, payload: null) {
    return this.request(url, "delete", payload);
  }
}
