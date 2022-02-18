import { UPDATE_BOUNDS } from "../actions/filter_actions";

const filters= Object.freeze({
  bounds:{}
})
const filterReducers= (state=filters,action) =>{
  Object.freeze(state)
  if (action.type ===UPDATE_BOUNDS){
    debugger;
   return Object.assign({}, state, { [action.bounds]: action.value})
  }else{
    return state;
  }
}



export default filterReducers;