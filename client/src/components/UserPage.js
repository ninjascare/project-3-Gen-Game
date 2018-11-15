import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div>
        <h1> welcome to the users page </h1>
        <h3>All Users:</h3>
        {this.state.users.map(user => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}><button>{user.name}</button></Link>
          </div>
        ))}
      </div>
    );
  }
}
