import { RECEIVE_REVIEW, REMOVE_REVIEW_ERRORS,RECEIVE_REVIEW_ERRORS } from "../actions/listings_actions";

const _nullErrors=[]
const reviewsErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case RECEIVE_REVIEW:
    case REMOVE_REVIEW_ERRORS:
      return []
    default:
      return oldState;
  }
}


export default reviewsErrorsReducer;