import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import {  createReservation, updateReservation,removeReservationErrors } from "../../actions/reservation_actions";
import { clearListings } from "../../actions/filter_actions";
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
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  clearErrors: () => dispatch(removeReservationErrors()),
  closeModal: () => dispatch(closeModal()),
  clearListings: () => dispatch(clearListings())
})

export default connect(mSTP, mDTP)(ConfirmReservation)