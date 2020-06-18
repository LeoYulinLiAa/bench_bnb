import React, { useState } from "react";
import { login, signup } from "../actions/session_actions";
import { useDispatch, useSelector } from "react-redux";

/**
 * @param {{formType: "login" | "signup"}} props
 */
const SessionForm = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const hasErrorSelector = state => state.errors.session.length > 0;
  const errorsSelector = state => state.errors.session;

  const hasError = useSelector(hasErrorSelector);
  const errors = useSelector(errorsSelector);

  function resetForm() {
    setUsername("");
    setPassword("");
  }

  function submitHandler(event) {
    event.preventDefault();
    switch (props.formType) {
      case "login":
        dispatch(login({ username, password }))
          .then(resetForm, err => console.log(err))
        break;
      case "signup":
        dispatch(signup({ username, password }))
          .then(resetForm, err => console.log(err))
        break;
    }
  }

  return <div className="session-form">
    <h2>{ props.formType }</h2>
    { hasError && <div className="alert danger">
      <ul>
        { errors.map(e => <li>{ e }</li>) }
      </ul>
    </div> }
    <form onSubmit={ submitHandler }>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={ username } onChange={ event => setUsername(event.target.value) }/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={ password } onChange={ event => setPassword(event.target.value) }/>
      </div>
      <button>{ props.formType }</button>
    </form>
  </div>

};

export const LoginForm = props => SessionForm({ ...props, formType: "login" });
export const SignupForm = props => SessionForm({ ...props, formType: "signup" });