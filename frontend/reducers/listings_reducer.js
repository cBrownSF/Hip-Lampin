import { RECEIVE_LISTING,RECEIVE_ALL_LISTINGS,REMOVE_LISTING } from "../actions/listings_actions";
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
    default:
      return oldState;
  }
}

export default listingsReducer;