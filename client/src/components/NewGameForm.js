import React, { Component } from "react";
import axios from "axios";

export default class NewGameForm extends Component {
  state = {
    newGame: {
      name: "",
      image: "",
      platform: "",
      year: ""
    }
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const createdGame = { ...this.state.newGame };
    createdGame[e.target.name] = e.target.value;
    this.setState({ newGame: createdGame });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      name: this.state.newGame.name,
      platform: this.state.newGame.platform,
      image: this.state.newGame.image,
      year: this.state.newGame.year
    };
    const userId = this.props.match.params.userId;
    axios.post(`/api/users/${userId}/videogames`, payload).then(res => {
      console.log(res.data);
      this.props.history.go(`/users/${userId}`);
    }); 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="platform">Platform:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.platform}
              type="text"
              name="platform"
            />
            <label htmlFor="year">Year Released:</label>
            <input
              onChange={this.handleChange}
              value={this.state.newGame.year}
              type="text"
              name="year"
            />
          </div>
          <button type="submit">Create New Game</button>
        </form>
      </div>
    );
  }
}
