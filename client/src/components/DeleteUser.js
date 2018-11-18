import React, { Component } from "react";
import axios from "axios";

export default class DeleteUser extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  handleDelete = userId => {
    axios.delete(`/api/users/${userId}`).then(() => {
      const filtered = this.state.user.filter(user => {
        return user._id !== userId;
      });
      this.setState({ user: filtered });
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleDelete(this.state.user._id)}>
          Delete this user
        </button>
      </div>
    );
  }
}
// try to get all the data of the users into that empty array and once u have it in there,
// within the return fucntion map throught that data and make a delete handleDelete fucntion to be able delete it
