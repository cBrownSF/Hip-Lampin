import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { receiveAllListings } from "../../actions/listings_actions";
const mSTP = (state,ownProps)=>{
  debugger;
  return {
    user: state.entities.users[ownProps.match.params.profileId],
    listings:Object.values(state.entities.listings),
    currentUser: state.entities.users[state.sessions.currentUser]
}
}
const mDTP = dispatch => ({
  receiveListings: () => dispatch(receiveAllListings())
})


export default connect(mSTP,mDTP)(Profile)