import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_error_reducer";
import listingErrorsReducer from "./listing_error_reducer"
import reviewsErrorsReducer from "./review_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  listing: listingErrorsReducer,
  review: reviewsErrorsReducer
});

export default errorsReducer