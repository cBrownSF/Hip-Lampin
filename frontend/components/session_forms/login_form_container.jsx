import { connect } from "react-redux";
import { login,removeSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(removeSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm)