import React, { useState } from "react";
import ReactDOM from "react-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [isMousedOver, setIsMousedOver] = useState(false);
  const [passwrd, setPasswrd] = useState("");

  function handleMail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handlePassword(event) {
    setPasswrd(event.target.value);
    console.log(event.target.value);
    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMousedOver(true);
  }

  function handleMouseOut() {
    setIsMousedOver(false);
  }

  return (
    <div className="container">
      <form>
        <div>
          <label>Email address {email}</label>
          <input
            onChange={handleMail}
            type="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div>
          <label>Password {passwrd}</label>
          <input onChange={handlePassword} placeholder="Password" type="text" />
        </div>

        <button
          style={{ backgroundColor: isMousedOver ? "orange" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
