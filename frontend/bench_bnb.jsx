import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  ReactDOM.render(<Root store={store} />, root);

  // tests
  window.signup = signup
  window.login = login
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});