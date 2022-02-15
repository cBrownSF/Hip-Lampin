import React from "react";
import { connect } from "react-redux";
import EditProfile from "./edit_profile";
import { updateUserInfo } from "../../actions/session_actions";

const mSTP = (state) => {
  debugger;
  return {
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mDTP = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUserInfo(user)),
  }
}
export default connect(mSTP, mDTP)(EditProfile)