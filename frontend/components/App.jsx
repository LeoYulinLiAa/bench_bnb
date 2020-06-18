import React from 'react';
import GreetingContainer from "./greeting_container";
import { LoginForm, SignupForm } from "./session_form";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <GreetingContainer />

    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} />
  </div>
);

export default App;