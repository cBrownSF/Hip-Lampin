import { UPDATE_BOUNDS,UPDATE_SEARCH } from "../actions/filter_actions";

const filters= Object.freeze({
  bounds:{}
})
const filterReducers= (state=filters,action) =>{
  Object.freeze(state)
  switch (action.type) {
    case UPDATE_BOUNDS:
      return Object.assign({}, state, { [action.bounds]: action.value })
  case UPDATE_SEARCH:
      return Object.assign({}, state, { [action.search]: action.value })
    default:
      return state;
  }

}



export default filterReducers;