import { connect } from "react-redux";
import { login,removeSessionErrors } from "../../actions/session_actions";
import { closeModal,openModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";
import React from "react";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(removeSessionErrors()),
    switchForms:( 
      <button className="font-switch-login" onClick={() => dispatch(openModal('signup'))}>
      Sign up!
    </button>),
    closeModal: ()=>dispatch(closeModal()),

  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm)