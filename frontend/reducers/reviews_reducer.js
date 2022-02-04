import { RECEIVE_REVIEW,RECEIVE_LISTING } from "../actions/listings_actions";


const reviewsReducer = (oldState={},action) => {
  Object.freeze(oldState)
  console.log(action)
    switch (action.type) {
    
      case RECEIVE_REVIEW:
        const { review } = action;
        console.log(review)
        return  Object.assign({}, oldState, { [action.review.id]: action.review })
      case RECEIVE_LISTING:
        return   Object.assign({}, oldState, action.reviews)
      default:
        'hit default'
        return oldState;
    }
}


export default reviewsReducer;
