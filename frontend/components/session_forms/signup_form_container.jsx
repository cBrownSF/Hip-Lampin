import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./signup_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.sessions.currentUser]
  }

}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm)