import React, { Component } from "react";
import Header from "../../Components/header";
import ('./dashboard.css');

class Dashboard extends Component {
  render() {
    return(
    <div id='main-view-profile'>
      <Header />
      <div id="profile-container">
        <div id="profile">
          <img />
          <h3 id="first-name">James</h3>
          <h3 id="last-name">Lemire</h3>
          <button id="edit-button">Edit Profile</button>
        </div>
        <div id="helo-info">
          <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name.  The more you update your profile, the better recommendations we can make!</p>
        </div>
      </div>
      <div id='recommended-friends'>
        <h2>Recommended Friends</h2>
        <p>Sorted by</p>
        <button>First Name</button>
      <div id="friends">
      </div>
      </div>
    </div>
    );
  }
}

export default Dashboard;
