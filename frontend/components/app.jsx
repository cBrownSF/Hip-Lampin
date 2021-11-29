import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './welcome_pages/welcome_page_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import ListingFormContainer from './listings/listing_form_container'
import ListingShowContainer from "./listings/listing_show_container";
import { AuthRoute,ProtectedRoute } from "../util/routes";

const App = () => (
  <div>
    <header>
    <p className='mainLogo'>HipCamp</p>
    <GreetingContainer/>
  </header>
    <ProtectedRoute exact path='/listings/new' component ={ListingFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/listings/:listingId" component={ListingShowContainer} />
  </div>
);

export default App;