import { RECEIVE_REVIEW,RECEIVE_LISTING,REMOVE_REVIEW } from "../actions/listings_actions";


const reviewsReducer = (oldState={},action) => {
  Object.freeze(oldState)
    switch (action.type) {
    
      case RECEIVE_REVIEW:
        const { review } = action;
        return  Object.assign({}, oldState, { [action.review.id]: action.review })
      case RECEIVE_LISTING:
     console.log('reviewReducer')
        return   Object.assign({}, oldState, action.reviews)
      case REMOVE_REVIEW:
        let nextState = Object.assign({}, oldState)
        delete nextState[action.reviewId]
        return nextState
      default:
        return oldState;
    }
}


export default reviewsReducer;
