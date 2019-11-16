import { combineReducers } from "redux";
import { RootState } from "./states";
import heroeReducer from "./heroe.reducer";

const reducers = combineReducers<RootState>({
  heroe: heroeReducer
});

export default reducers;
