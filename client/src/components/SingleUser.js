import React, { Component } from "react";
import VideoGameList from "./videoGameList";

export default class SingleUser extends Component {
  
  render() {
    return (
      <div>
        <VideoGameList {...this.props}/>
      </div>
    );
  }
}
