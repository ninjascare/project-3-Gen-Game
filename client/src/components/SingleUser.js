import React, { Component } from "react";
import VideoGameList from "./videoGameList";
import axios from "axios";
import NewGameForm from "./NewGameForm";
import UpdateUser from "./UpdateUser";
import styled from 'styled-components'

const PageStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;

`;

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
        <h3>Update User</h3>
        <UpdateUser {...this.props} />
        <hr />
        <PageStyle>
        <VideoGameList {...this.props} />
        </PageStyle>
        <hr /> <br />
        <h3>Create New Game Choice</h3>
        <NewGameForm {...this.props} />
      </div>
    );
  }
}
