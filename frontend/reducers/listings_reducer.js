import { RECEIVE_LISTING,RECEIVE_ALL_LISTINGS } from "../actions/listings_actions";
const listingsReducer = (oldState = {},action) =>{
  console.log(action)
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      debugger;
      return action.listings
    case RECEIVE_LISTING:
      debugger;
      return Object.assign({},oldState,{[action.listing.id]: action.listing})
    default:
      return oldState;
  }
}

export default listingsReducer;