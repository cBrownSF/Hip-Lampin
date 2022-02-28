import { RECEIVE_RESERVATION, REMOVE_RESERVATION_ERRORS, RECEIVE_RESERVATION_ERRORS } from "../actions/listings_actions";

const _nullErrors = []
const reviewsErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors
    case RECEIVE_RESERVATION:
    case REMOVE_RESERVATION_ERRORS:
      return []
    default:
      return oldState;
  }
}


export default reviewsErrorsReducer;