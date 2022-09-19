import updateUser from "./apis/updateUser";

const utils = require("./utils/index.ts");

describe("Test For PUT/UPDATE a User", () => {
  let userId: number;
  let updateData: any;
  beforeAll(() => {
    userId = utils.updateInfo().id;
    updateData = utils.updateInfo().data;
  });
  const updateUserInstance = new updateUser();
  it("Should return res updated Object", async () => {
    const result = await updateUserInstance.updateInfo(userId, updateData);

    expect(result.status).toEqual(200);
  });

  it("Should not return Null", async () => {
    const result = await updateUserInstance.updateInfo(userId, updateData);

    expect(result.data).not.toBeNull();
  });

  it("Should return updated time", async () => {
    const result = await updateUserInstance.updateInfo(userId, updateData);

    expect(result.data).toBeInstanceOf(Object);
    expect(result.data?.updatedAt).toContain('2022') 
   });
});
