import React, { Component } from "react";
import styled from "styled-components";

const LetterBackground = styled.div`
  background: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 80px 0px 80px;
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <LetterBackground>
          <h1>Welcome to GameLiker</h1>
          <p>
            This is a app where game lovers can come and keep track of all the
            games they've ever played and loved.
          </p>
        </LetterBackground>
      </div>
    );
  }
}
