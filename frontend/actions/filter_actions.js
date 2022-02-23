import { receiveAllListings } from "./listings_actions";
export const UPDATE_BOUNDS= 'UPDATE_BOUNDS'
export const UPDATE_SEARCH= 'UPDATE_SEARCH'
export const REMOVE_ALL_LISTINGS='REMOVE_ALL_LISTINGS'
export const REMOVE_ALL_REVIEWS='REMOVE_ALL_REVIEWS'
export const updateBounds= (bounds,value)=>({
  type:UPDATE_BOUNDS,
  bounds,
  value
})
export const updateSearch= (search,value)=>({
  type:UPDATE_SEARCH,
  search,
  value
})
export const removeAllListings=(listings)=>({
  type:REMOVE_ALL_LISTINGS,
  listings
})
export const removeAllReviews=(reviews)=>({
  
  type:REMOVE_ALL_REVIEWS,
  reviews
})

export const updateFilter = (bounds,value) => (dispatch, getState) => {
  dispatch(updateBounds(bounds,value));
  return receiveAllListings(getState().ui.filters)(dispatch);
};


export const getSearchResult = (search, value) => (dispatch) => {
  dispatch(updateSearch(search, value));
}

export const clearListings = () => (dispatch)=>{
  //getState().entities.listings
  return dispatch(removeAllListings({}));
}

export const clearReviews = () => (dispatch)=>{
  debugger;
  return dispatch(removeAllReviews({}));
}