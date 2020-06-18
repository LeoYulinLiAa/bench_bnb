import React from 'react';
import GreetingContainer from "./greeting_container";
import { Route } from "react-router-dom";
import { LoginForm, SignupForm } from "./session_form";

const App = () => (
  <div>
    <GreetingContainer />

    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
  </div>
);

export default App;