import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './root.jsx'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  ReactDOM.render(<Root store={store}/>,root);
  window.store = store
});

