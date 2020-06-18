import React from 'react';
import GreetingContainer from "./greeting_container";
import { LoginForm, SignupForm } from "./session_form";
import { AuthRoute } from "../util/route_util";
import BenchIndex from "./bench_index";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <GreetingContainer />
    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} />
    <Route exact path="/" component={BenchIndex} />
  </div>
);

export default App;