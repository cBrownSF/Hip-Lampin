import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { currentUser, logout } = this.props
    if (currentUser !== null) {
      console.log('signed in')
      return (
        <div>
          <button onClick={logout}>Logout</button>
          <h1>Hi {currentUser.username}</h1>
        </div>
      )
    } else {
      console.log('signed out')
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <br />
          <Link to='/login'>Log In</Link>
        </div>
      )
    }
  }
}

export default Greeting;