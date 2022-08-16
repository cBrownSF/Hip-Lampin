import { RECEIVE_REVIEW,RECEIVE_LISTING,REMOVE_REVIEW } from "../actions/listings_actions";
import { REMOVE_ALL_REVIEWS } from "../actions/filter_actions";

const reviewsReducer = (oldState={}, action) => {
  Object.freeze(oldState)
    switch (action.type) {
      case RECEIVE_REVIEW:
        return  Object.assign({}, oldState, { [action.review.id]: action.review })
      case RECEIVE_LISTING:
        return   Object.assign({}, oldState, action.reviews)
      case REMOVE_REVIEW:
        let nextState = Object.assign({}, oldState)
        delete nextState[action.reviewId]
        return nextState
      case REMOVE_ALL_REVIEWS:
        return action.reviews
      default:
        return oldState;
    }
}


export default reviewsReducer;
