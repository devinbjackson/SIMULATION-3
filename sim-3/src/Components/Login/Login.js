import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "abc",
      password: "123"
    };
  }

  render() {
    console.log(this.state);
    return (
      <div id="background">
        <div id="center-block">
          <img src={require("../../Images/logo.png")} alt="Helo Logo" />
          <div id="helo">Helo</div>
          <div id="button">Login / Register</div>
        </div>
      </div>
    );
  }
}

export default Login;
