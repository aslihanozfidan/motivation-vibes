import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class RandomBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * 5);
  };

  setRandomThumbBackground = number => {
    this.setState({
      image: `http://localhost:5000/${number}_mini.jpg`
    });
  };

  setRandomFullSizeBackground = number => {
    this.setState({
      image: `http://localhost:5000/${number}.jpg`
    });
  };

  componentDidMount = () => {
    let randomNumber = this.getRandomNumber();
    this.setRandomThumbBackground(randomNumber);
    this.setRandomFullSizeBackground(randomNumber);
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
  image: PropTypes.string
};

export default RandomBackground;
