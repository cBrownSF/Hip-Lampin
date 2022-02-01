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
        state: 1
      };
      return (
      <div className="nav-bar-container">
          <span className='mainLogo'><Link className='mainLogo' to='/'>HipLampin</Link></span>
        <nav>
        {/* <h2 className ="greeting">Welcome {currentUser.fname}!</h2> */}
        <ul className="nav-bar">
          {/* <li className='nav-li'><Link className="nav-li" to='/listings'>Listings</Link></li> */}
          <li className="nav-li" onClick={logout}>Logout</li>
          <li className="nav-li">Profile</li>
        </ul>
        </nav>
          <Link to={newTo}><button className='start-hosting'>New Listing</button></Link>
        </div>
      )
    } else {
      return (
        <div className="nav-bar-container">
          <span className='mainLogo'><Link className='mainLogo' to= '/'>HipLampin</Link></span>
        <nav >
          <ul className="nav-bar">
            <li className = 'nav-li'><Link className = "nav-li" to= '/listings'>Listings</Link></li>
            <li className = 'nav-li'><Link className ="nav-li" to='/login'>Log In</Link></li>
            <li className='nav-li'><Link className="nav-li" onClick = {login} to='/'>DemoLogin</Link></li>
          </ul>
        </nav>
          <button className='start-hosting'><Link className="nav-li" to='/signup'>Sign Up</Link></button>
        </div>
      )
    }
  }
}

export default Greeting;

