import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_error_reducer";
import listingErrorsReducer from "./listing_error_reducer"
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  listing: listingErrorsReducer
});

export default errorsReducer