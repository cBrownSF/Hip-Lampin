import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './root.jsx'
import {login,logout,signup} from './actions/session_actions'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  console.log(store)
  ReactDOM.render(<Root store={store}/>,root);
  window.store = store
  window.login = login
  window.logout =logout
  window.signup = signup
});

