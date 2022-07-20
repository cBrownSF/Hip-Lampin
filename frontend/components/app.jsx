import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContainer from "./welcome_pages/home_page_container";
import Footer from "./welcome_pages/footer"
import GreetingContainer from './welcome_pages/welcome_page_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import ListingFormContainer from './listings/listing_form_container'
import ReservationShowContainer from "./reservations/reservation_show_container";
import ListingShowContainer from "./listings/listing_show_container";
import EditFormContainer from "./listings/edit_form_container";
import ProfileContainer from "./profile/profile_container";
import SearchContainer from './search/search_container';
import HomePage from './welcome_pages/home_page'
import Modal from './modal/modal';
import { AuthRoute,ProtectedRoute } from "../util/routes";
import { useLocation } from "react-router-dom";
const App = () => {
const path=useLocation().pathname
return(
  <div>
    <div className='content'>
    <Modal />
    <header style={{
      background: path === "/" || path === "/listings/new" || path.includes('edit') ? "rgb(243, 242, 239)" : "white"
    }}>
    <GreetingContainer/>
  </header>
  <Switch>
    <ProtectedRoute exact path="/listings/new" component ={ListingFormContainer} />
    <Route exact path="/profile/:profileId" component = {ProfileContainer}/>
    <Route exact path="/listings/:listingId" component={ListingShowContainer} />
    <Route exact path="/listings/:listingId/edit" component={EditFormContainer}/>
    <Route exact path="/reservations/:reserveId" component={ReservationShowContainer}/>
    <Route exact path='/listings' component={SearchContainer} />
    <Route exact path="/" component={HomePageContainer} />
  </Switch>
    </div>
    <footer style={{
      background: path === "/" || path === "/listings/new" || path.includes('edit') ? "rgb(243, 242, 239)" : "white"
    }}>
    <Footer />
  </footer>
  </div>
)
};

export default App;