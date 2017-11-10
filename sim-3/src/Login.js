import React, { Component } from "react";
import axios from 'axios';
import './Login.css'


class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: 'abc',
      password: '123'
    };


  }

  handleClick(){
    axios.get('http://localhost:3001/api/test').then(response => console.log(response));
  }

  render() {
      console.log(this.state)
    return (
    <div id='background'>
        <div id='center-block'>
            <img src=""></img>
            <div id='helo'>Helo</div>
            <div id='button' onClick={this.handleClick}>Login / Register</div>
        </div>
    </div>
    )
  }
}

export default Login;