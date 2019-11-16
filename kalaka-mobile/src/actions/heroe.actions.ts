import { Action } from "./interfaces";

export const HEROE_TYPES = {
  SET_NAME: "SET_NAME",
  SET_ACTIVE: "SET_ACTIVE"
};

export const setName = (): Action<any> => {
  return {
    type: HEROE_TYPES.SET_NAME
  };
};

export const setActive = (): Action<any> => {
  return {
    type: HEROE_TYPES.SET_ACTIVE
  };
};
