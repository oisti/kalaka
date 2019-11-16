import { HeroeState } from "./states";
import { Action } from "actions/interfaces";
import { HEROE_TYPES } from "actions";

let initialState: HeroeState = {
  heroe: {
    name: "Hero",
    active: false
  }
};

export default function(
  state: HeroeState = initialState,
  action: Action<any>
) {
  switch (action.type) {
    case HEROE_TYPES.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case HEROE_TYPES.SET_ACTIVE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
