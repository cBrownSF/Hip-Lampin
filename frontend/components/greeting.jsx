import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser, logout } = this.props
    if (currentUser) {
      return (
        <div>
          <button className="logout-button" onClick={logout}>Logout</button>
          <h1 className ="greeting">Welcome {currentUser.fname}!</h1>
        </div>
      )
    } else {
      return (
        <div className="navBar">
          <Link to='/signup'>Sign Up</Link>
          <br />
          <Link to='/login'>Log In</Link>
        </div>
      )
    }
  }
}

export default Greeting;

