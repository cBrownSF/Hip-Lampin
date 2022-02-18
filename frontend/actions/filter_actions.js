import { receiveAllListings } from "./listings_actions";
export const UPDATE_BOUNDS= 'UPDATE_BOUNDS'
export const UPDATE_SEARCH= 'UPDATE_SEARCH'

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


export const updateFilter = (bounds,value) => (dispatch, getState) => {
  dispatch(updateBounds(bounds,value));
  return receiveAllListings(getState().ui.filters)(dispatch);
};


export const getSearchResult = (search, value) => (dispatch) => {
  dispatch(updateSearch(search, value));
}