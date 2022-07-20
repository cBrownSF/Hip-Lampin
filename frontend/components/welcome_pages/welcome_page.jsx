import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import SearchBar from "./search_bar";

import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  const hist=useHistory()
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
    //.nav-bar-container {width:90%; max-width:900px; margin: 0 auto;}
    //.nav-bar-nav {display: flex; }
  return (
    <div className="nav-bar-container">
      <div className='logo-div'>
        <span className='mainLogo'><Link className='mainLogo' to='/'>HipLampin</Link></span>
      </div>
        {useLocation().pathname === "/" || useLocation().pathname.includes('edit')|| useLocation().pathname === "/listings/new"?(
          <div className='nav-search-bar-div'></div>
      ):(
        <div className='nav-search-bar-div'>
          <SearchBar 
            className='small-search-wrapper'
            history={hist}
            bounds={props.bounds}
          />
        </div>
      )}
      <nav className ='nav-bar-nav'>
        <ul className="nav-bar">
          <li className="nav-li"><Link className='nav-link' to={allListings}>Listings</Link></li>
          <li className="nav-li" onClick={logout}>Logout</li>
          <li className="nav-li" ><Link className='nav-link' to={`/profile/${currentUser.id}`}>Profile</Link></li>
          <li className="nav-li"><Link className='nav-link' to={newTo}><button className='start-hosting'>New Listing</button></Link></li>
        </ul>
      </nav>
        {/* <Link to={newTo}><button className='start-hosting'>New Listing</button></Link> */}
      </div>
    )
  } else {
    return (
      <div className="nav-bar-container">
        <div className = 'logo-div'>
          <span className='mainLogo'><Link className='mainLogo' to='/'>HipLampin</Link></span>
        </div>
        {useLocation().pathname === "/" || useLocation().pathname === "/listings/edit" || useLocation().pathname === "/listings/new"? (
          <div className='nav-search-bar-div'></div>
        ) : (
          <div className='nav-search-bar-div'>
            <SearchBar
              className='small-search-wrapper'
              history={hist}
            />
          </div>
        )}
      <nav className = 'nav-bar-nav'>
        <ul className="nav-bar">
          <li><Link className = "nav-li" to={allListings}>Listings</Link></li>
          <li> <button className="nav-li-button" onClick={() => openModal('login')}>Login</button></li>
          <li className='nav-li'onClick = {login} >DemoLogin</li>
        </ul>
      </nav>
        <button onClick={() => openModal('signup')} className='start-hosting'>Sign Up</button>
      </div>
    )
  }
  }


export default withRouter(NavBar);

