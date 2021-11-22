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
        <div className ='navBar'>
          <button className="navBarButton" onClick={logout}>Logout</button>
          <h1 className ="greeting">Welcome {currentUser.fname}!</h1>
        </div>
      )
    } else {
      return (
        <div className="navBar">
            <span className = 'navList'><Link className="navBarButton" to='/signup'>Sign Up</Link></span>
            <span className = 'navList'><Link className ="navBarButton" to='/login'>Log In</Link></span>
          {/* <Link className = "navBarButton" to='/login'>Demo Log in</Link> */}
        </div>
      )
    }
  }
}

export default Greeting;

