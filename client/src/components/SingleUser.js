import React, { Component } from "react";
import VideoGameList from "./videoGameList";
import axios from "axios";
import NewGameForm from "./NewGameForm";
import UpdateUser from "./UpdateUser";
import styled from "styled-components";
import {Button} from 'react-materialize'

const PageStyle = styled.div`
  font-family: "Cabin", sans-serif;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background: url("http://static.tumblr.com/e60b248ae9bd68cb888034e7bb7d3b2f/o0cmdl5/qf7ndgrdb/tumblr_static_7yzz7mm0sz4sk4swok00cko4w.png");
  border-radius: 12px;
  padding: 12px;
  margin: 0px 90px;
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
        <PageStyle>
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
          <VideoGameList {...this.props} />
          <hr /> <br />
          <h3>Create New Game Choice</h3>
          <NewGameForm {...this.props} />
        </PageStyle>
      </div>
    );
  }
}
