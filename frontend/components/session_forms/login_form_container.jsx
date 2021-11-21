import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./sessions_form";

const mapStateToProps = (state) => {
  return {
    errors: state.sessions.errors,
    formType: 'login',
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm)