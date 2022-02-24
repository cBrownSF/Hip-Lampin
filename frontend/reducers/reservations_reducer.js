import { RECEIVE_RESERVATION_INFO } from "../actions/reservation_actions";


const ReservationReducer = (oldState={},action)=>{
  oldState=Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_RESERVATION_INFO:
      return Object.assign({},state,{reservationInfo:action.info})
    default:
      return oldState
      break;
  }
}


export default ReservationReducer;