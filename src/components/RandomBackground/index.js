import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

const axios = require("axios");

class RandomBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  getRandomBackground = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=c282bd4e5d5c9761c7af1f3a5e76e17e16613384df73f02789ec2876e5e53472"
      )
      .then(response => {
        console.log(response, "in random background");
        this.setState({ image: response.data.urls.full });
      })
      .catch(error => {
        console.error(error, "in random background");
      });
  };

  componentDidMount = () => {
    this.getRandomBackground();
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.image})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          zIndex: -1,
          opacity: 0.5
        }}
      />
    );
  }
}

RandomBackground.defaultProps = {
  image: ""
};

RandomBackground.propTypes = {
  image: PropTypes.string,
};

export default RandomBackground;
