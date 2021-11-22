import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session.responseJSON,
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm)