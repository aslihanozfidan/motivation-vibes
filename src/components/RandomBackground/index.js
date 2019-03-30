import React, { Component } from "react";
import "./style.css";

class RandomBackground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{backgroundImage: `url(https://picsum.photos/200/?random)`}}
        className="random-image" />
    );
  }
}

export default RandomBackground;
