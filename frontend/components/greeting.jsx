import React from 'react';
import { Link } from "react-router-dom";

const Greeting = props => {

  function handleSubmit(event) {
    event.preventDefault();
    props.logout();
  }

  const display = props.currentUser ? (
    <>
      <h3>Welcome { props.currentUser.username }</h3>
      <button onClick={ handleSubmit }>Logout</button>
    </>
  ) : (
    <>
      <h3>Welcome</h3>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </>
  );

  return (
    <div>
      { display }
    </div>
  );
};

export default Greeting;
