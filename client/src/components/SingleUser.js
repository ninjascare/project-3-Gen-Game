import React, { Component } from "react";
import VideoGameList from "./videoGameList";
import axios from "axios";
import NewGameForm from "./NewGameForm";
import DeleteUser from "./DeleteUser";

export default class SingleUser extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  // handleDelete = userId => {
  //   axios.delete(`/api/users/${userId}`).then(() => {
  //     const filtered = this.state.user.filter(user => {
  //       return user._id !== userId;
  //     });
  //     this.setState({ user: filtered });
  //   });
  // };

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.user.name}'s profile page</h1>
        <img src={this.state.user.image} alt="profile pic" />
        <h3>
          Console of Preferences: <br />
          {this.state.user.console}
        </h3>
        <DeleteUser {...this.props}/>
        <hr />
        <VideoGameList {...this.props} />
        <hr /> <br />
        <h3>Create New Game Choice</h3>
        <NewGameForm {...this.props} />
      </div>
    );
  }
}
