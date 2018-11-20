import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import UpdateGame from "./UpdateGame";
import { Button } from "react-materialize";

const PageStyle = styled.div`
  font-family: "EB Garamond", serif;
  margin: 12px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
  img {
    border-radius: 50px;
    margin: 12px 0px;
  }
`;

const Leteter = styled.div`
  font-family: "EB Garamond", serif;
  margin: 12px 0px;
  color: #f57c00;
  font-weight: bolder;
  background: url("http://2.bp.blogspot.com/-MRwYeTOVaw0/VZ3IlIoQpyI/AAAAAAAAIr8/Wetii_b7KWs/s1600/flying%2Bthrough%2Bthe%2Bvoid.gif");
  border-radius: 20px;
  margin: 0px 80px 0px 80px;
`;

const Back = styled.div`
  font-family: "EB Garamond", serif;
  margin: 12px 0px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRNub8wGbW_aqxk-Hvo_yVZJzq3EXESJeNhFxv2f5m7UO2t1j");
  height: 20%;
  border-radius: 12px;
  margin: 0px 80px 0px 80px;
`;
const Form = styled.div`
  font-family: "EB Garamond", serif;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background: url("http://paperlief.com/images/blue-gradient-wallpaper-2.jpg");
  width: 40vw;
  background-repeat: no-repeat;
  background-position: fill;
  border-radius: 20px;
  margin: 0px 100px 0px 100px;
`;

const BothStuff = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 12px 0px;
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
        </PageStyle>
        <BothStuff>
          <Back>
            <h3>What console I played this game at:</h3>
            <h5> {this.state.games.platform}</h5>

            <h3>
              The year the game was released: <br />
            </h3>
            <h5>{this.state.games.year}</h5>
          </Back>
          <Form>
            <h3>Update game:</h3>
            <UpdateGame {...this.props} />
          </Form>
        </BothStuff>
      </div>
    );
  }
}
