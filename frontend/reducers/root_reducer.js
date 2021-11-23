import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import entitiesReducer from './entities_reducer';
import sessionReducer from "./session_reducer";

const RootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  sessions: sessionReducer
});

export default RootReducer;





