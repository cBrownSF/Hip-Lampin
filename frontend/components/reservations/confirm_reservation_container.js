import { connect } from "react-redux";
import { createReservation,removeReservationErrors } from "../../util/reservation_api_util";
import { sendResInfo } from "../../actions/reservation_actions";
import ConfirmReservation from "./confirm_reservation";
const mSTP = (state) => {
  debugger;
  return {
    errors: state.errors.reservation,
    info:state.entities.reservations.reservationInfo,
  }
}

const mDTP = dispatch => ({
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  clearErrors: () => dispatch(removeReservationErrors()),
})

export default connect(mSTP, mDTP)(ConfirmReservation)