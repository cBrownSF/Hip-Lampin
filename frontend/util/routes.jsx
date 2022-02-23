import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const mapStateToProps = state => {
  return { 
    isLoggedIn: Boolean(state.sessions.currentUser) 
  };
};
const Auth = ({ component: Component, path, isLoggedIn}) => (
  <Route
    path={path}
    render={props =>
      !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, isLoggedIn, path, exact }) => (
  <Route 
  path={path} 
  exact={exact} 
  render={props => 
    isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
  }
   />
);

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));