import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { currentUser, logout } = this.props
    if (currentUser !== undefined) {
      console.log('signed in')
      return (
        <div>
          <button className="logout-button" onClick={logout}>Logout</button>
          <h1 className ="greeting">Hi {currentUser.username}</h1>
        </div>
      )
    } else {
      console.log('signed out')
      return (
        <div className="navBar">
          <Link to='/signup'>Sign Up</Link>
          <br />
          <Link to='/login'>Log In</Link>
        </div>
      )
    }
  }
}

export default Greeting;
// const Greeting = (props) => {
//   console.log(props.logout)
//   console.log(props.currentUser)
//   console.log(props)
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
//       <button className="header-button" onClick={props.logout}>Log Out</button>
//     </hgroup>
//   );

//   return props.currentUser ? personalGreeting() : sessionLinks();
// };


