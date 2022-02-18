import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class Greeting extends React.Component {
  constructor(props) {
    super(props)
  debugger
  }

  render() {
    console.log(this.props)
    debugger;
    const { currentUser, logout,login,openModal } = this.props
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
          <li><Link className="nav-li" to='/listings'>Listings</Link></li>
              <li className="nav-li" onClick={logout}>Logout</li>
          <li ><Link className="nav-li" to={`/profile/${currentUser.id}`}>Profile</Link></li>
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
              <li className='nav-li'> <button className="nav-li-button" onClick={() => openModal('login')}>Login</button></li>
            <li className='nav-li'onClick = {login} >DemoLogin</li>
          </ul>
        </nav>
          <button onClick={() => openModal('signup')} className='start-hosting'>Sign Up</button>
        </div>
      )
    }
  }
}

export default withRouter(Greeting);

