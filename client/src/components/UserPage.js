import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewUserForm from "./NewUserForm";
import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  margin: 0px 80px 0px 80px;

`;

export default class UserPage extends Component {
  state = {
    users: []
  };

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
    });
  };
  componentDidMount() {
    this.getAllUsers();
  }

  handleDelete = userId => {
    axios.delete(`/api/users/${userId}`).then(() => {
      const deletedUser = [...this.state.users];
      const filtered = deletedUser.filter(user => {
        return user._id !== userId;
      });
      this.setState({ users: filtered });
    });
  };

  render() {
    return (
      <PageStyle>
        <h1> welcome to the users page </h1>
        <h3>All Users:</h3>
        {this.state.users.map(user => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>
              <button>{user.name}</button>
            </Link>
            <button onClick={() => this.handleDelete(user._id)}>
              Delete this user
            </button>
          </div>
        ))}
        <br /> <hr />
        <NewUserForm {...this.props} />
      </PageStyle>
    );
  }
}
