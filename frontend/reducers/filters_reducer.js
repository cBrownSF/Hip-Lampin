import { UPDATE_BOUNDS,UPDATE_SEARCH } from "../actions/filter_actions";
import { RECEIVE_ALL_LISTINGS } from "../actions/listings_actions";
import { REMOVE_ALL_LISTINGS } from "../actions/filter_actions";
const filters= Object.freeze({
  bounds:{}
})
const filterReducers= (state=filters,action) =>{
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return Object.assign({}, state, { total: Object.values(action.listings).length })
    case UPDATE_BOUNDS:
      return Object.assign({}, state, { [action.bounds]: action.value })
    case UPDATE_SEARCH:
      return Object.assign({}, state, { [action.search]: action.value })
    case REMOVE_ALL_LISTINGS:
      return Object.assign({}, state, { total: undefined })
    default:
      return state;
  }

}



export default filterReducers;