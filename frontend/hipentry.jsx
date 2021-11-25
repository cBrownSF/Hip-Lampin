import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root.jsx'
import {receiveAllListings,updateListing,createListing,deleteListing,receiveListing} from './actions/listings_actions'
import { login, logout,signup } from './actions/session_actions'
// import { login, logout,signup } from './util/session_api_util'
import {fetchListings,fetchListing} from './util/listing_api_util'
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { 
          [window.currentUser.id]: window.currentUser 
        }
      },
      sessions: { currentUser: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  
  }
  // const stores = configureStore();
  window.store =store;
  
  // window.updateListing = updateListing //double check this works
  
  window.getState = store.dispatch;
  window.dispatch = store.dispatch;
  window.receiveListing = receiveListing;
  window.deleteListing = deleteListing;
  window.updateListing = updateListing;
  window.receiveAllListings = receiveAllListings;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

});