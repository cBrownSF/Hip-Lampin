import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = (state,ownProps)=>{
  debugger;
  return {
    user: state.entities.users[ownProps.match.params.profileId],
    listings:Object.values(state.entities.listings),
    currentUser: state.entities.users[state.sessions.currentUser]
}
}



export default connect(mSTP)(Profile)