import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-materialize";
import { Link } from "react-router-dom";

const LetterBackground = styled.div`
  font-family: "Share Tech Mono", monospace;
  background: url("https://media.giphy.com/media/3BMzS7YxKmT0gs8nVl/giphy.gif");
  height: 40vh;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 80px 0px 80px;
  span {
    font-weight: 20px;
  }
`;

const Start = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <LetterBackground />
        {/* <Carousel
            options={{ duration: 300}}
            options={{ fullWidth: true}}
            options={{ indicators: true}}
            options={{ dist: 500}}
            options={{ pressed: trye}}
            images={[
              "https://media.giphy.com/media/tKmbgzyh1wviU/giphy.gif",
              "https://media.giphy.com/media/d9QiBcfzg64Io/giphy.gif",
              "https://i.gifer.com/2P91.gif",
              "https://i.gifer.com/YFRH.gif"
            ]}
          /> */}
        <Start>
          <Link to="/users">
            <img
              src="https://studio.code.org/v3/assets/CL6c4yNC-zPvXJpEcg-yYw/pressstart.gif"
              alt="start "
            />
          </Link>
        </Start>
      </div>
    );
  }
}
