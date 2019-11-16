import { Action } from "./interfaces";

export const HEROE_TYPES = {
  SET_HEROE: "SET_HEROE",
  SET_ACTIVE: "SET_ACTIVE"
};

export const setHeroe = (data: object): Action<object> => {
  return {
    type: HEROE_TYPES.SET_HEROE,
    payload: data
  };
};

export const setActive = (): Action<any> => {
  return {
    type: HEROE_TYPES.SET_ACTIVE
  };
};
