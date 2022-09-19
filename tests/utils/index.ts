import { userData } from "../enums/index";

const Chance = require("chance");
const chance = new Chance();

export const loginInfo = () => {
  return {
    email: userData.EMAIL,
    password: userData.PASSWORD,
  };
};

export const registerInfo = () => {
  return {
    email: chance.email({ domain: "@reqres.in" }),
    password: chance.word(),
  };
};

export const createInfo = () => {
  return {
    name: chance.name(),
    job: chance.string({ length: 5, casing: "upper", alpha: true }),
  };
};

export const updateInfo = () => {
  return {
    id: userData.ID,
    data: {
      name: chance.name(),
      job: chance.string({ length: 5, casing: "upper", alpha: true }),
    },
  };
};

export const deleteUserId = () => {
  return {
    id: chance.integer({ min: 1, max: 10 }),
  };
};
export const getUserId = () => {
  return {
    id: chance.integer({ min: 1, max: 10 }),
  };
};
