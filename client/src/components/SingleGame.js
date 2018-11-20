import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import UpdateGame from "./UpdateGame";
import {Button} from 'react-materialize'


const PageStyle = styled.div`
  font-family: "EB Garamond", serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const Leteter = styled.div`
  font-family: "EB Garamond", serif;
  color: #f57c00 ;
  font-weight: bolder;
  background: url('http://2.bp.blogspot.com/-MRwYeTOVaw0/VZ3IlIoQpyI/AAAAAAAAIr8/Wetii_b7KWs/s1600/flying%2Bthrough%2Bthe%2Bvoid.gif');
  border-radius: 20px;
  margin: 0px 80px 0px 80px;
`;

const Back = styled.div`
  font-family: "EB Garamond", serif;
  background: #abcdef;
  border-radius: 12px;
  margin: 0px 80px 0px 80px;
`;
const Form = styled.div`
  font-family: "EB Garamond", serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background: #abcdef;
  border-radius: 12px;
  margin: 0px 100px 0px 100px;
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
      <div>
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
        <Form>
          <h3>Update game:</h3>
          <UpdateGame {...this.props} />
        </Form>
      </div>
    );
  }
}
