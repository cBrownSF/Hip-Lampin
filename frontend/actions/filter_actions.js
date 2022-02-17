import { receiveAllListings } from "./listings_actions";
export const UPDATE_BOUNDS= 'UPDATE_BOUNDS'

export const updateBounds= (bounds,value)=>({
  type:UPDATE_BOUNDS,
  bounds,
  value
})


export const updateFilter = (bounds,value) => (dispatch, getState) => {
  debugger;
  dispatch(updateBounds(bounds,value));
  debugger;
  return receiveAllListings(getState().ui.filters)(dispatch);
};