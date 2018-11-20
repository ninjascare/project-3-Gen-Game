import React, { Component } from "react";
import axios from "axios";
import {Button} from 'react-materialize'


export default class UpdateUser extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);    
    const UpdateUser = { ...this.state.user };
    UpdateUser[e.target.name] = e.target.value;
    this.setState({ user: UpdateUser });
  };

  handleUpdate = userId => {
    const updatedUser = this.state.user
    axios.patch(`/api/users/${userId}`, updatedUser).then(() => {
      console.log("Updated User");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={() => this.handleUpdate(this.state.user._id)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="console">Console</label>
            <input
              onChange={this.handleChange}
              value={this.state.user.console}
              type="text"
              name="console"
            />
          </div>
          <Button className='#1976d2 blue darken-2' type="submit">Update User</Button>
        </form>
      </div>
    );
  }
}
