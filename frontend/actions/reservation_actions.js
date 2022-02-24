export const RECEIVE_RESERVATION_INFO='RECEIVE_RESERVATION_INFO'


export const reservationInfo = (info)=>{
  return{
    type:RECEIVE_RESERVATION_INFO,
    info
  }
}


export const sendResInfo= (info) => (dispatch) => {
  dispatch(reservationInfo(info));
}