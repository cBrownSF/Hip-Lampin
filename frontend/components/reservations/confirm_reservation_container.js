import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import {  createReservation, updateReservation,removeReservationErrors } from "../../actions/reservation_actions";
import { clearListings } from "../../actions/filter_actions";
import ConfirmReservation from "./confirm_reservation";
import { withRouter } from 'react-router';

const mSTP = (state,ownProps) => {
  
  return {
    errors: state.errors.reservation,
    info:state.entities.reservations.reservationInfo,
    location:ownProps.location,
    history:ownProps.history
  }
}

const mDTP = dispatch => ({
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  clearErrors: () => dispatch(removeReservationErrors()),
  closeModal: () => dispatch(closeModal()),
  clearListings: () => dispatch(clearListings())
})

export default withRouter(connect(mSTP, mDTP)(ConfirmReservation))