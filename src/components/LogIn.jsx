import React, { useState } from 'react';


export default function LogIn() {

  const [useremail, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const setEmailEvent = (event) => {
    setEmail(event.target.value);
  };

  const setPasswordEvnet = (event) => {
    setPassword(event.target.value);
  };



  return (
    <>
      <h1>Login & Signup</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={setEmailEvent} value={useremail} type="email" className="form-control" placeholder='Enter your email' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={setPasswordEvnet} value={password} type="password" className="form-control" placeholder='Enter your Password' id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />

          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label><br />
          <span><a href="">Forget Password</a></span>
        </div>
        <button type="button" onClick={() => { console.log("useremail", "password", useremail, password); }} className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}


