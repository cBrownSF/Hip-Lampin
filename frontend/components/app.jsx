import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './welcome_pages/welcome_page_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import ListingFormContainer from './listings/listing_form_container'
import { AuthRoute } from "../util/routes";
const App = () => (
  <div>
    <header>
    <p className='mainLogo'>HipCamp</p>
    <GreetingContainer/>
  </header>
    <Route path='/hosting' component ={ListingFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;