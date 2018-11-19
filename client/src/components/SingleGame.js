import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'

const PageStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const Leteter = styled.div`
background: white;
border-radius: 12px;

`;

const Back = styled.div`
background: white;
border-radius: 12px;

`;


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
      <PageStyle>
        <Leteter>
        <h3> {this.state.games.name}</h3>
        </Leteter>
        <img src={this.state.games.image} alt="gamePicture" />
        <Back>
        <h3>What console I played this game at:</h3>
        <p> {this.state.games.platform}</p>
      
        <h3>
          The year the game was released: <br />
        </h3>
        <p>{this.state.games.year}</p>
        </Back>
      </PageStyle>
    );
  }
}
