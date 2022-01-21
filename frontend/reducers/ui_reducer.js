import { combineReducers } from "redux";
import filterReducers from "./filters_reducer";

const uiReducer=combineReducers({
  filters:filterReducers,
})

export default uiReducer