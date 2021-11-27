import React from "react";
import { Link } from "react-router-dom";
class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    const { currentUser, logout,login } = this.props
    if (currentUser) {
      return (
        <div className="logged-in">
        <h2 className ="greeting">Welcome {currentUser.fname}!</h2>
          <button className="log-out-button" onClick={logout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="navBar">
            <span className = 'navList'><Link className="navBarButton" to='/signup'>Sign Up</Link></span>
            <span className = 'navList'><Link className ="navBarButton" to='/login'>Log In</Link></span>
            <span className = 'navList'><Link className ="navBarButton" to= '/hosting'>Start Hosting</Link></span>
            <span className='navList'><Link className="navBarButton" onClick = {login} to='/'>DemoLogin</Link></span>
        </div>
      )
    }
  }
}

export default Greeting;

