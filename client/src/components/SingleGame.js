import React, { Component } from "react";
import axios from "axios";

export default class SingleGame extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    const videogamesId = this.props.match.params.videoGamesId;
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}/videogames/${videogamesId}`).then(res => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
  }

  render() {
    return (
      <div>
        <h3> {this.state.games.name}</h3>
        <img src={this.state.games.image} alt="gamePicture" />
        <h3>What console I played this game at:</h3>
        <p> {this.state.games.platform}</p>
        <h3>
          The year the game was released: <br />
        </h3>
        <p>{this.state.games.year}</p>
      </div>
    );
  }
}
