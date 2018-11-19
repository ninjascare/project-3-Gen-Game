import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #457b9d;
  height: 50px;

  button {
    text-decoration: none;
    padding-left: 10px;
    color: black;
    height: 4vh;
    border-radius: 15px;
    &:active {
      color: white;
      background: red;
    }
  }
  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
  }
`;

export default class NavBar extends Component {
  render() {
    return (
      <NavBarStyles>
        <div className="right">
        <Link to="/">
          <button> Home </button>
        </Link>
        <br />
        <Link to="/users">
          <button> Users </button>
        </Link>
        </div>
      </NavBarStyles>
    );
  }
}
