import registerUser from "./apis/registerUser";

const utils = require("./utils/index.ts");

describe("Test For POST User", () => {
  let createData: any;
  beforeEach(() => {
    createData = utils.createInfo();
  });
  const registerUserInstance = new registerUser();
  it("Should return status 200", async () => {
    const result = await registerUserInstance.createUser(createData);
    expect(result.status).toEqual(201); //Check if res status is 200
    expect(result.status).not.toBe(400); //Check if res status is not 400
    expect(result.status).not.toBeCloseTo(400);
  });

  it("StatusText should be Created", async () => {
    const result = await registerUserInstance.createUser(createData);
    expect(result.statusText).toEqual("Created");
    expect(result.statusText).not.toEqual("");
  });

  it("Should return a object as response", async () => {
    const result = await registerUserInstance.createUser(createData);
    expect(result.data).toBeInstanceOf(Object); //Check if data is objects
  });
});
