import { connect } from "react-redux";
import { updateReservation,deleteReservation,sendResInfo } from "../../actions/reservation_actions";
import ReservationShow from "./reservation_show";
import { openModal } from "../../actions/modal_actions";



const mapStateToProps = (state,ownProps) => {
  return {
    formatDate: ownProps.location.state,
    reservation: state.entities.users[state.sessions.currentUser].reservations[ownProps.match.params.reserveId],
    currentUser: state.entities.users[state.sessions.currentUser],
    history: ownProps.history
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
    openModal: modal => dispatch(openModal(modal)),
    sendReservation: (info) => dispatch(sendResInfo(info)),
    deleteReservation: (id) => dispatch(deleteReservation(id))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ReservationShow)