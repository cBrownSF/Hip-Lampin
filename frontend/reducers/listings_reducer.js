import { RECEIVE_REVIEW,RECEIVE_LISTING,RECEIVE_ALL_LISTINGS,REMOVE_LISTING } from "../actions/listings_actions";
const listingsReducer = (oldState = {},action) =>{
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
    return action.listings

    case RECEIVE_LISTING:
   
      return Object.assign({},oldState,{[action.listing.id]: action.listing})
    case REMOVE_LISTING:
      let nextState = Object.assign({},oldState)
      delete nextState[action.listingId]
      return nextState;
    case RECEIVE_REVIEW:
      const { review} = action;
      //cleaning it up a bit
      const newState = Object.assign({}, oldState);
      //creating new state
      newState[review.listing_id].reviewIds.push(review.id);
      //updating newState
      //pushing reviews into listing
      return newState;
    default:
      return oldState;
  }
}

export default listingsReducer;