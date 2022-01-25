import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [headerText, setHeading] = useState("");
  const [isMousedOver, setIsMousedOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleClick() {
    setHeading(name);
    console.log("Clicked");
  }

  function handleMouseOver() {
    setIsMousedOver(true);
    console.log("hovered overe button");
  }

  function handleMouseOut() {
    setIsMousedOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headerText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
