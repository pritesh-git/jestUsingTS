const utils = require("./utils/index");
import deleteUser from "./apis/deleteUser";

describe("Test For Delete a User", () => {
  let deleteId: number;
  beforeEach(() => {
    deleteId = utils.deleteUserId().id;
  });

  const deleteUserInstance = new deleteUser();

  it("Should return res Deleted Object-1", async () => {
    const deleteResponse = await deleteUserInstance.deleteUser(deleteId);
    expect(deleteResponse.status).toEqual(204);
    expect(deleteResponse.statusText).toBe("No Content");
    expect(deleteResponse.data).toBe("");
  });
  it("Should return res Deleted Object-2", async () => {
    const deleteResponse = await deleteUserInstance.deleteUser(deleteId);
    expect(deleteResponse.data).toBe("");
    expect(deleteResponse).toBeTruthy();
  });
  it("Should return res Deleted Object-3", async () => {
    const deleteResponse = await deleteUserInstance.deleteUser(deleteId);
    expect(deleteResponse.status).not.toEqual(200);
    expect(deleteResponse.status).not.toEqual(201);
    expect(deleteResponse.status).not.toEqual(400);
  });
});
