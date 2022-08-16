import { RECEIVE_REVIEW,RECEIVE_LISTING,RECEIVE_ALL_LISTINGS,REMOVE_LISTING } from "../actions/listings_actions";
import { REMOVE_ALL_LISTINGS } from "../actions/filter_actions";
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
      const newState = Object.assign({}, oldState);
      newState[review.listing_id].reviewIds.push(review.id);
      return newState;
    case REMOVE_ALL_LISTINGS:
      return action.listings
    default:
      return oldState;
  }
}

export default listingsReducer;