import React, { Component } from "react";
import styled from 'styled-components'

const LetterBackground = styled.div`
background: white;



` 

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <LetterBackground>
        <h1>Welcome to GameLiker</h1>
        </LetterBackground>
      </div>
    );
  }
}
