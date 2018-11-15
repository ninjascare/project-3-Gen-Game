import React, { Component } from "react";
import axios from "axios";

export default class NewUserForm extends Component {
  state = {
    users: [],
    newUser: {
      name: "",
      image: "",
      console: ""
    }
  };

  handleChange = (event) => {};

  handleSubmit = (event) => {};


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.newUser.name}
            />
          </div>
          <div>
            <label htmlFor="">Image</label>
            <input
              onChange={this.handleChange}
              type="url"
              name="image"
              value={this.state.newUser.image}
            />
          </div>
          <div>
            <label htmlFor="">Console</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="console"
              value={this.state.newUser.console}
            />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
}
