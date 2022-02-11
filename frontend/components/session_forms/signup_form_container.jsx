import { connect } from "react-redux";
import { closeModal,openModal } from "../../actions/modal_actions";
import React from "react";
import { signup,removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./signup_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.sessions.currentUser]
  }

}

const mapDispatchtoProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(removeSessionErrors()),
    switchForms: (
      <button className="font-switch-login" onClick={() => dispatch(openModal('login'))}>
        Log In!
      </button>),
    closeModal: () => dispatch(closeModal()),

  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm)