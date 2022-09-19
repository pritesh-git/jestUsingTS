import getUser from "./apis/getUser";

const { pageNumber } = require("./enums/index");
const utils = require("./utils/index.ts");

// ========================================MULTI USER API ==============================================
describe("Test For Get Users on Page-1", () => {
  let firstPage: number;
  let secondPage: number;
  let invalidPage: number;
  beforeAll(() => {
    firstPage = pageNumber.FIRST;
    secondPage = pageNumber.SECOND;
    invalidPage = pageNumber.INVALID;
  });

  const getUserInstance = new getUser();
  it("Should return status 200", async () => {
    const result = await getUserInstance.getPageUsers(firstPage);
    expect(result.status).toEqual(200); //Check if res status is 200
    expect(result.status).toBeCloseTo(200); //Check if res status is close to 200 like 201,202...
    expect(result.status).not.toBe(400); //Check if res status is not 400
    expect(result.status).not.toBeCloseTo(400); //Check if res status is not close to 400 like 401,402...
  });

  it("Should return a array as response", async () => {
    const result = await getUserInstance.getPageUsers(secondPage);
    expect(result.data.data).toBeInstanceOf(Array); //Check if data is Array
    result.data.data.forEach((element: any) => {
      //Check if data is array of objects
      expect(element).toBeInstanceOf(Object);
    });
  });

  it("Should return a array of length more then 5", async () => {
    const result = await getUserInstance.getPageUsers(firstPage);
    expect(result.data.data.length).toBeGreaterThan(1); //response array to be greater then 1
    expect(result.data.data.length).toBeGreaterThan(3); //response array to be greater then 3
    expect(result.data.data.length).toBeGreaterThan(5); //response array to be greater then 5
  });

  it("Should not return a null array", async () => {
    const result = await getUserInstance.getPageUsers(secondPage);
    // expect(result.data.data).toBeNull();
    expect(result.data.data).not.toBeNull();
  });
});

// ========================================MULTI UNKNOWN USER API ==============================================
describe("Test For Users on Page-1", () => {
  const getUserInstance = new getUser();
  it("Should return status 200", async () => {
    const result = await getUserInstance.getListUsers();
    expect(result.status).toEqual(200); //Check if res status is 200
    expect(result.status).toBeCloseTo(200); //Check if res status is close to 200 like 201,202...
    expect(result.status).not.toBe(400); //Check if res status is not 400
    expect(result.status).not.toBeCloseTo(400); //Check if res status is not close to 400 like 401,402...
  });

  it("Should return a array as response", async () => {
    const result = await getUserInstance.getListUsers();
    expect(result.data.data).toBeInstanceOf(Array); //Check if data is Array

    result.data.data.forEach((element: any) => {
      //Check if data is array of objects
      expect(element).toBeInstanceOf(Object);
    });
  });

  it("Should not return a null array", async () => {
    const result = await getUserInstance.getListUsers();
    //  expect(result.data.data).toBeNull();
    expect(result.data.data).not.toBeNull();
  });
});

// ============================================SINGLE USER API================================================

describe("Test For Get Single User", () => {
  const getUserInstance = new getUser();
  let userId: number;
  beforeEach(() => {
    userId = utils.getUserId().id;
  });
  it("Should return single known user", async () => {
    const result = await getUserInstance.getSingleUser(userId);
    expect(result.status).toEqual(200); //Check if res status is 200
    expect(result.status).toBeCloseTo(200); //Check if res status is close to 200 like 201,202...
  });
  it("Should return single unknown user", async () => {
    const result = await getUserInstance.getSingleUser(userId);
    expect(result.status).not.toBe(400); //Check if res status is not 400
    expect(result.status).not.toBeCloseTo(400); //Check if res status is not close to 400 like 401,402...
  });
});

// ============================================SINGLE UNKNOWN USER API================================================

describe("Test For Get Single Known User", () => {
  const getUserInstance = new getUser();
  let userId: number;
  beforeEach(() => {
    userId = utils.getUserId().id;
  });
  it("Should return status 200", async () => {
    const result = await getUserInstance.getUser(userId);
    expect(result.status).toEqual(200); //Check if res status is 200
    expect(result.status).toBeCloseTo(200); //Check if res status is close to 200 like 201,202...
  });

  it("Should return status 200", async () => {
    const result = await getUserInstance.getUser(userId);
    expect(result.status).not.toBe(400); //Check if res status is not 400
    expect(result.status).not.toBeCloseTo(400); //Check if res status is not close to 400 like 401,402...
  });

  it("Should return not NULL res", async () => {
    const result = await getUserInstance.getUser(userId);
    expect(result.data.data).not.toBe([]); //Check res not be a blank ARRAY
    expect(result.data.data).not.toBe(null); //Check res should not to be NULL
    expect(result.data.data).not.toBe(undefined); //Check res should not to be UnDEFINED
  });
});
