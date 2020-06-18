import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const sessionData = JSON.parse(localStorage.getItem("sessionData"));
  const preloadedState = sessionData ? sessionData : {}
  const store = configureStore(preloadedState);

  store.subscribe(() => {
    const userId = store.getState().session.id;
    if (userId == null) {
      localStorage.removeItem("sessionData");
    } else {
      const currentUser = store.getState().entities.users[userId];
      localStorage.setItem("sessionData", JSON.stringify({
        entities: {
          users: { [currentUser.id]: currentUser },
        },
        session: {
          id: currentUser.id
        }
      }));
    }
  });

  ReactDOM.render(<Root store={store} />, root);

  // tests
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});