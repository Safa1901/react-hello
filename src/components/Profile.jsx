import React, { Component } from "react";
import {logIn, logOut} from './actions'
import {connect} from 'react-redux'
// import Map from "./components/Map";




export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      
      <p>
        Profile.
        <button onClick={this.unauthenticate}>Log out</button>
      </p>
    );
  }
}


export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);
