import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }
  demoLogin(){
    
  }
  render() {
    const { currentUser, logout,demoLogin } = this.props
    if (currentUser) {
      return (
        <div className="navBar">
          <button className="navBarButton" onClick={logout}>Logout</button>
          <h1 className ="greeting">Welcome {currentUser.fname}!</h1>
        </div>
      )
    } else {
      return (
        <div className="navBar">
            <span className = 'navList'><Link className="navBarButton" to='/signup'>Sign Up</Link></span>
            <span className = 'navList'><Link className ="navBarButton" to='/login'>Log In</Link></span>
            <span className='navList'><Link className="navBarButton" to='/login'>DemoLogin</Link></span>
          {/* <Link className = "navBarButton" to='/login'>Demo Log in</Link> */}
        </div>
      )
    }
  }
}

export default Greeting;

