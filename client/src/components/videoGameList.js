import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class VideoGameList extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}/videogames`).then(res => {
      // console.log(res.data);
      this.setState({
        games: res.data
      });
    });
  }

  render() {
    const userId = this.props.match.params.userId
    const gameDetails = this.state.games.map(game => (
    
      <Link key={game._id} to={`/users/${userId}/videogames/${game._id}`}>
        <h3>{game.name}</h3>
      </Link>
    ))

    return (
      <div>
        <h1>My Video Game List </h1>
        {gameDetails}
      </div>
    );
  }
}
