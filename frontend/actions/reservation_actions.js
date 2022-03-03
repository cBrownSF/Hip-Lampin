import * as ReservationAPIUtil from '../util/reservation_api_util'
export const RECEIVE_RESERVATION_INFO='RECEIVE_RESERVATION_INFO'
export const RECEIVE_RESERVATION ='RECEIVE_RESERVATION'
export const RECEIVE_RESERVATION_ERRORS='RECEIVE_RESERVATION_ERRORS'
export const REMOVE_RESERVATION_ERRORS='REMOVE_RESERVATION_ERRORS'
export const REMOVE_RESERVATION='REMOVE_RESERVATION'

export const receiveOneReservation=(reservation)=>{
return {
  type:RECEIVE_RESERVATION,
  reservation
}
}

export const reservationInfo = (info)=>{
  return{
    type:RECEIVE_RESERVATION_INFO,
    info
  }
}
export const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
})
const receiveReservationErrors = errors => {
  return {
    type: REMOVE_RESERVATION_ERRORS,
    errors
  }
}
export const removeReservationErrors = () => ({
  type: REMOVE_RESERVATION_ERRORS
})

export const createReservation= reservation => dispatch =>{
  return ReservationAPIUtil.createReservation(reservation)
  .then(createdReservation=> dispatch(receiveOneReservation(createdReservation)),
  (errors)=>dispatch(receiveReservationErrors(errors.responseJSON)))
}
export const updateReservation = reservation => (dispatch) => {
  console.log('update')
  return ReservationAPIUtil.updateReservation(reservation)
    .then(updatedReservation => {
      dispatch(receiveOneReservation(updatedReservation))
    }),
    (errors) => dispatch(receiveReservationErrors(errors.responseJSON))

}
export const sendResInfo= (info) => (dispatch) => {
 return dispatch(reservationInfo(info))
}