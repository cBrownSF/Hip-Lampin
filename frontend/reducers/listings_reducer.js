import { RECEIVE_ALL_LISTINGS,RECEIVE_LISTINGS } from "../actions/listings_actions";

const listingsReducer = (oldState = {},action) =>{
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.listing
    case RECEIVE_LISTINGS:
      return Object.assign({},oldState,{[action.listing.id]: action.listing})
    default:
      return oldState;
  }
}

export default listingsReducer;