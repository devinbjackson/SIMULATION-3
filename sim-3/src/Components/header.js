import React, { Component } from "react";
import("./header.css");

class Header extends Component {
  render() {
    return (
      <div id="header-container">
        <h1 id="Helo">Helo</h1>
        <img id="home" src={require("../Images/home.png")} />
        <img id="search" src={require("../Images/search.png")} />
        <h3 id="dashboard">Dashboard</h3>
        <h3 id="logout">Logout</h3>
      </div>
    );
  }
}

export default Header;
