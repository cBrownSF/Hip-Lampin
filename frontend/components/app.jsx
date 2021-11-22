import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './greeting_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import { AuthRoute } from "../util/routes";
const App = () => (
  <div>
    <header>
    <h1>HipCamp Routessr</h1>
    <GreetingContainer/>
  </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;