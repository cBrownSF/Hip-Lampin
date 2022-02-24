import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import listingsReducer from "./listings_reducer";
import reviewsReducer from "./reviews_reducer";
import reservationReducer from "./reservations_reducer";
const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  reviews: reviewsReducer,
  reservations: reservationReducer
});

export default entitiesReducer;