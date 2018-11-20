import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col, CardTitle } from "react-materialize";
import styled from "styled-components";
import {Button} from 'react-materialize'


const CardsStyling = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    height: 30vh;
    width: 20vw;
    margin: 0 auto;

  }
`;

export default class VideoGameList extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}/videogames`).then(res => {
      // console.log(res.data);
      this.setState({
        games: res.data
      });
    });
  }

  handleDelete = videogamesId => {
    console.log("Delete call");
    const userId = this.props.match.params.userId;
    axios.delete(`/api/users/${userId}/videogames/${videogamesId}`).then(() => {
      this.componentDidMount();
    });
  };

  render() {
    const userId = this.props.match.params.userId;
    const gameDetails = this.state.games.map(game => (
      <div>
        <Col m={6} s={12}>
          <Card
            header={
              <CardTitle
                className="red-text text-darken-2"
                image="https://media0.giphy.com/media/No3GPv5mjkskE/giphy.gif?cid=3640f6095bf32687467365782ed14e85"
              >
                {" "}
                <Link
                  key={game._id}
                  to={`/users/${userId}/videogames/${game._id}`}
                >
                  <h3>{game.name}</h3>
                </Link>
              </CardTitle>
            }
            className="#80cbc4 teal lighten-3"
            textClassName="white-text"
            actions={[
              <Button className='#ef5350 red lighten-1' onClick={() => this.handleDelete(game._id)}>
                Delete this game
              </Button>
            ]}
          />
        </Col>
      </div>
    ));

    return (
      <div>
        <h1>My Video Game List </h1>
        <br />
        <CardsStyling>{gameDetails}</CardsStyling>
      </div>
    );
  }
}
