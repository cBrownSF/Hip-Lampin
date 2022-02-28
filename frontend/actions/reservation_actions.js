export const RECEIVE_RESERVATION_INFO='RECEIVE_RESERVATION_INFO'
export const RECEIVE_RESERVATION='RECEIVE_RESERVATION'
export const RECEIVE_RESERVATION_ERRORS='RECEIVE_RESERVATION_ERRORS'
export const REMOVE_RESERVATION_ERRORS='REMOVE_RESERVATION_ERRORS'
export const REMOVE_RESERVATION='REMOVE_RESERVATION'

export const receiveOneReservation=(reservation)=>({
  type:RECEIVE_RESERVATION,
  reservation
})

export const reservationInfo = (info)=>{
  return{
    type:RECEIVE_RESERVATION_INFO,
    info
  }
}
export const removeReview = reservationId => ({
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
  type: REMOVE_REVIEW_ERRORS
})

export const createReservation= reservation =>(dispatch)=>{
  return ReservationAPIUtil.createReservation(reservation)
  .then(createdReservation=>{
    dispatch(receiveOneReservation(createdReservation))
  }),
  (errors)=>dispatch(receiveReservationErrors(errors.responseJSON))
}
export const updateReview = reservation => (dispatch) => {
  return ReservationAPIUtil.updateReservation(reservation)
    .then(updatedReservation => {
      dispatch(receiveOneReview(updatedReservation))
    }),
    (errors) => dispatch(receiveReservationErrors(errors.responseJSON))

}
export const sendResInfo= (info) => (dispatch) => {
 return dispatch(reservationInfo(info))
}