import { connect } from "react-redux";
import { sendResInfo } from "../../actions/reservation_actions";
import ConfirmReservation from "./confirm_reservation";
const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.reservation,
    info:state.entities.reservationInfo,
  }
}

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(ConfirmReservation)