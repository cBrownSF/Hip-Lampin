import { combineReducers } from "redux";
import filterReducers from "./filters_reducer";
import modalReducer from "./modal_reducer";
const uiReducer=combineReducers({
  filters:filterReducers,
  modal:modalReducer
})

export default uiReducer;