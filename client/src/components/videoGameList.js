import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class VideoGamePage extends Component {
  state = {
    user: {},
    games: []
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}/videogames`).then(res => {
      console.log(res.data.games)
      this.setState({
        user: res.data,
        games: res.data.games
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the {this.state.user.name}'s video game list </h1>
        {this.state.games.map(game => (
          <div key={game._id}>
            <Link to={`/videogames/${game._id}`}>
              <img src="{game.image}" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
