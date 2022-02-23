import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContainer from "./welcome_pages/home_page_container";
import GreetingContainer from './welcome_pages/welcome_page_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import ListingFormContainer from './listings/listing_form_container'
import ListingShowContainer from "./listings/listing_show_container";
import EditFormContainer from "./listings/edit_form_container";
import ProfileContainer from "./profile/profile_container";
import SearchContainer from './search/search_container';
import HomePage from './welcome_pages/home_page'
import EditProfileContainer from "./profile/edit_profile_container";
import Modal from './modal/modal';
import { AuthRoute,ProtectedRoute } from "../util/routes";
import { useLocation } from "react-router-dom";
const App = () => {
const path=useLocation().pathname
return(
  <div>
    <Modal />
    <header style={{
      background: path === "/" || path === "/listings/new" || path.includes('edit') ? "rgb(243, 242, 239)" : "white"
    }}>
    <GreetingContainer/>
  </header>
  <Switch>
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    <ProtectedRoute exact path="/listings/new" component ={ListingFormContainer} />
    <ProtectedRoute exact path="/profile/:profileId/edit" component ={EditProfileContainer} />
    <Route exact path="/profile/:profileId" component = {ProfileContainer}/>
    <Route exact path="/listings/:listingId" component={ListingShowContainer} />
    <Route exact path="/listings/:listingId/edit" component={EditFormContainer}/>
    <Route exact path='/listings' component={SearchContainer} />
      <Route exact path="/" component={HomePageContainer} />

  </Switch>
  </div>
)
};

export default App;