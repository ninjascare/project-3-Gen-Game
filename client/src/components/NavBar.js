import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className=" #78909c blue-grey lighten-1" right>
          <NavItem brand="GameLiker" className="brand-logo center ">
           Gen-Game
          </NavItem>
          <NavItem href='/' waves='light'><Icon left>home</Icon>Home</NavItem>
          <NavItem href='/users' waves='light'><Icon left>supervisor_account</Icon>Users</NavItem>
        </Navbar>
      </div>
    );
  }
}
