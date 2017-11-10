import React, { Component } from "react";
<<<<<<< HEAD:sim-3/src/Login.js
import "./Login.css";
=======


import './Login.css'

>>>>>>> master:sim-3/src/Components/Login/Login.js

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "abc",
      password: "123"
    };
  }

  handleClick(){
    axios.get('http://localhost:3001/api/test').then(response => console.log(response));
  }

  render() {
    console.log(this.state);
    return (
    <div id='background'>
        <div id='center-block'>
            <img src={require("../../Images/logo.png")} alt="Helo Logo"></img>
            <div id='helo'>Helo</div>
            <div id='button' onClick={this.handleClick}>Login / Register</div>
        </div>
      </div>
    );
  }
}

export default Login;
