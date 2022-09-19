import loginUser from "./apis/loginUser";

const utils = require("./utils/index.ts");

describe("Test For Login a User", () => {
  let loginData: any;
  beforeAll(() => {
    loginData = utils.loginInfo();
  });
  const loginUserInstance = new loginUser();
  it("Should return login Success", async () => {
    const result = await loginUserInstance.login(loginData);

    expect(result.status).toEqual(200);
    expect(result.statusText).toBe("OK");
  });

  it("Should return login token", async () => {
    const result = await loginUserInstance.login(loginData);

    expect(result.data).not.toBeNull();
    expect(result.data).toBeInstanceOf(Object);
    expect(result.data).toHaveProperty("token");
  });
});
