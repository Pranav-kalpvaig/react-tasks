import React, { useState } from 'react'


function RegisTration() {

  const [username, setUsername] = useState("");
  const [usermail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [contactno, setContactno] = useState("");

  const setUsernameEvent = (event) => {
    setUsername(event.target.value);
  }

  const setUsermailEvent = (event) => {
    setMail(event.target.value);
  } 

  const setPassEvent = (event) => {
    setPass(event.target.value);
  } 

  const setContactnoEvent = (event) => {
    setContactno(event.target.value);
  }

  return (
    <>
      <h1>Registration</h1>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" onChange={setUsernameEvent} value={username} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <form>
  <div className="mb-3">
    <input type="email" onChange={setUsermailEvent} value={usermail} className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <input type="password" onChange={setPassEvent} value={pass} className="form-control" placeholder=' Password' id="exampleInputPassword1"/>
  </div>
  <div className="input-group mb-3">
        <input type="contact" onChange={setContactnoEvent} value={contactno} className="form-control" placeholder="Contact No" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
  <button onClick={()=>{console.log("username","usermail","pass","contactno",username,usermail,pass,contactno)}} type='button' className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default RegisTration
