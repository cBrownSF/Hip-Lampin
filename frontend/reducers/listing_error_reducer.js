import {RECEIVE_LISTING_ERRORS, RECEIVE_LISTING} from "../actions/listings_actions";

const _nullErrors = []
const listingErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  listingErrorsReducer;
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      debugger;
      return action.errors
    case RECEIVE_LISTING:
      return [];
    default:
      return oldState;
  }
};

export default listingErrorsReducer;
