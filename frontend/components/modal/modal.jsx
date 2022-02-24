import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from "react-redux";
import SignupFormContainer from "../session_forms/signup_form_container";
import LoginFormContainer from "../session_forms/login_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'login':
      component = <LoginFormContainer />;
    case 'confirm':
      component=<ConfirmBookingContainer/>
      break;
    default:
      return null;
  }
  return (
    <div className="background-modal" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);