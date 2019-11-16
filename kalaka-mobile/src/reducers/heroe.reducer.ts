import { HeroeState } from "./states";
import { Action } from "actions/interfaces";
import { HEROE_TYPES } from "actions";

let initialState: HeroeState = {
    id: null,
    name: "Hero",
    active: false,
    avatar: null,
    points: 0
};

export default function(
  state: HeroeState = initialState,
  action: Action<any>
) {
  switch (action.type) {
    case HEROE_TYPES.SET_HEROE:
      return {
        ...action.payload
      };
    case HEROE_TYPES.SET_ACTIVE:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
}
