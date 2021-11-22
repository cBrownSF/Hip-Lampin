import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const mapStateToProps = state => {
  return { 
    isLoggedIn: Boolean(state.sessions.currentUser) 
  };
};
const Auth = ({ component: Component, path, isloggedIn}) => (
  <Route
    path={path}
    render={props =>
      !isloggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);


export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);
