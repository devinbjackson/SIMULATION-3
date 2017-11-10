import React, { Component } from "react";

import axios from 'axios'


import './Login.css'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "abc",
      password: "123"
    };
  }

  handleClick(){
    window.location.href = 'http://localhost:3001/login'
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
