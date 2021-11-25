import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root.jsx'
import {receiveAllListings} from './actions/listings_actions'
import { login, logout,signup } from './actions/session_actions'
import {fetchListings,createListing} from './util/listing_api_util'
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
  window.dispatch = store.dispatch;
  window.fetchListings = fetchListings
  window.receiveAllListings = receiveAllListings
  window.createListing=createListing
  window.getState = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

});