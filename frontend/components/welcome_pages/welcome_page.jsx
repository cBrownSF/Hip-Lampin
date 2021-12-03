import React from "react";
import { Link } from "react-router-dom";
class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    const { currentUser, logout,login } = this.props
    if (currentUser) {
      const newTo = {
        pathname: "/listings/new",
        search: '1',
        state: {value:1}
      };
      return (
        <div className="navBar">
        {/* <h2 className ="greeting">Welcome {currentUser.fname}!</h2> */}
          <span className='mainLogo'><Link className='mainLogo' to='/'>HipLampin</Link></span>
          <span className='log-out-button'><Link className="navBarButton" to='/listings'>Listings</Link></span>
          <button className="log-out-button" onClick={logout}>Logout</button>
          <button className= 'start-hosting'><Link className ="navBarButton" to= {newTo}>New Listing</Link></button>
        </div>
      )
    } else {
      return (
        <div className="navBar">
          <span className='mainLogo'><Link className='mainLogo' to= '/'>HipLampin</Link></span>
            <span className = 'navList'><Link className = "navBarButton" to= '/listings'>Listings</Link></span>
            <span className = 'navList'><Link className="navBarButton" to='/signup'>Sign Up</Link></span>
            <span className = 'navList'><Link className ="navBarButton" to='/login'>Log In</Link></span>
          <span className='navList'><Link className="navBarButton" onClick = {login} to='/'>DemoLogin</Link></span>
        </div>
      )
    }
  }
}

export default Greeting;

