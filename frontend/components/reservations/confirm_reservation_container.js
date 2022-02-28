import { connect } from "react-redux";
import { createReservation,removeReservationErrors } from "../../util/reservation_api_util";
import { closeModal } from "../../actions/modal_actions";
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
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ConfirmReservation)