import { RECEIVE_RESERVATION_INFO,REMOVE_RESERVATION,RECEIVE_RESERVATION } from "../actions/reservation_actions";


const ReservationReducer = (oldState={},action)=>{
  oldState=Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_RESERVATION_INFO:
      return Object.assign({},oldState,{reservationInfo:action.info})
    case REMOVE_RESERVATION:
      let nextState = Object.assign({}, oldState)
      delete nextState[action.reservationsId]
      return nextState;
    case RECEIVE_RESERVATION:
      debugger;
      return Object.assign({}, oldState, { [action.reservation.reservation.id]: action.reservation })
    default:
      return oldState
   
  }
}


export default ReservationReducer;