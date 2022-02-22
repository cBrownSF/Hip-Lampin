import React from "react";
import { Link,useLocation } from "react-router-dom";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";
const NavBar = (props) => {

    const { currentUser, logout,login,openModal } = props
  const allListings = {
    pathname: "/listings",
    search: 'all',
  };
    if (currentUser) {
      const newTo = {
        pathname: "/listings/new",
        state: 1
      };
     
      return (
      <div className="nav-bar-container">
          <span className='mainLogo'><Link className='mainLogo' to='/'>HipLampin</Link></span>
        {useLocation().pathname === "/"?(
          console.log(useLocation().pathname)
        ):(
          <div className='nav-search-bar-div'>
            <SearchBar 
            className='small-search-wrapper'
            />
          </div>
        )}
        <nav>
        <ul className="nav-bar">
              <li><Link className="nav-li" to={allListings}>Listings</Link></li>
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
            <li className = 'nav-li'><Link className = "nav-li" to={allListings}>Listings</Link></li>
              <li className='nav-li'> <button className="nav-li-button" onClick={() => openModal('login')}>Login</button></li>
            <li className='nav-li'onClick = {login} >DemoLogin</li>
          </ul>
        </nav>
          <button onClick={() => openModal('signup')} className='start-hosting'>Sign Up</button>
        </div>
      )
    }
  }


export default withRouter(NavBar);

