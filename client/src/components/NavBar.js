import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarItem = styled.div`
  display: flex;
  align-items: flex-end;
`;

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className=" #78909c blue-grey lighten-1" right>
          <NavItem brand="GameLiker" className="brand-logo center ">
            Gen-Game
          </NavItem>
          <NavBarItem>
            <Link to="/">
              <NavItem waves="light">
                <Icon left>home</Icon>Home
              </NavItem>
            </Link>
            <Link to="/users">
              <NavItem waves="light">
                <Icon left>supervisor_account</Icon>Users
              </NavItem>
            </Link>
          </NavBarItem>
        </Navbar>
      </div>
    );
  }
}
