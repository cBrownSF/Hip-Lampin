import {RECEIVE_LISTING_ERRORS, RECEIVE_LISTING} from "../actions/listings_actions";

const _nullErrors = []
const receiveAllListings = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors
    case RECEIVE_LISTING:
      return [];
    default:
      return oldState;
  }
};

export default receiveAllListings;
