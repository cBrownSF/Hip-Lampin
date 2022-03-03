import { connect } from "react-redux";
import { updateReservation,sendResInfo } from "../../actions/reservation_actions";
import ReservationShow from "./reservation_show";
import { openModal } from "../../actions/modal_actions";

import React from "react";

const mapStateToProps = (state,ownProps) => {
  debugger;
  return {
    formatDate: ownProps.location.state,
    reservation: state.entities.users[state.sessions.currentUser].reservations[ownProps.match.params.reserveId],
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReservationShow)