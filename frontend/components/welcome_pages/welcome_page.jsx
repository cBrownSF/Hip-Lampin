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
        <div className="navBar">
          <h1 className ="greeting">Welcome {currentUser.fname}!</h1>
          <button className="navList" onClick={logout}>Logout</button>
        <div>
        </div>
        </div>
      )
    } else {
      return (
        <div className="navBar">
            <span className = 'navList'><Link className="navBarButton" to='/signup'>Sign Up</Link></span>
            <span className = 'navList'><Link className ="navBarButton" to='/login'>Log In</Link></span>
            <span className='navList'><Link className="navBarButton" onClick = {login} to='/'>DemoLogin</Link></span>
        </div>
      )
    }
  }
}

export default Greeting;

