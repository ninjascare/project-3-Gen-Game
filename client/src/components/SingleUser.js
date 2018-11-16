import React, { Component } from "react";
import VideoGameList from "./videoGameList";
import axios from "axios";
import NewGameForm from "./NewGameForm";

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

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.user.name}'s profile page</h1>
        <img src={this.state.user.image} alt="profile pic" />
        <h3>
          Console of Preferences: <br />
          {this.state.user.console}
        </h3>

        <hr />
        <VideoGameList {...this.props} />
        <hr/> <br/>
        <NewGameForm {...this.props} />
      </div>
    );
  }
}
