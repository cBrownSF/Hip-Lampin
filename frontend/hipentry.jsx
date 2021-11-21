import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {login,logout,signup} from './util/session_api_util'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to HipCamp</h1>, root);
  const store = configureStore()
  window.store = store
});