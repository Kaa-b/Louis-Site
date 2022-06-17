import React from "react";
import YouTube from "react-youtube";
// Styles
import { Wrapper } from "./YouTube.styles";

class Youtube extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <Wrapper>
        <h1>Suis moi sur YouTube !</h1>
        <YouTube videoId="b0CswO-1-7o" opts={opts} onReady={this._onReady} />
      </Wrapper>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
