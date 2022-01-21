import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import entitiesReducer from './entities_reducer';
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
const RootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  sessions: sessionReducer,
  ui:uiReducer
});

export default RootReducer;





