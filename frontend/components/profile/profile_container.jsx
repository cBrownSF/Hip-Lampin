import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = (state)=>{
  debugger;
  return {
    user: state.entities.users[ownProps.match.params.profileId],
    listings:Object.values(state.entities.listings)
  }
}




export default connect(mSTP)(Profile)