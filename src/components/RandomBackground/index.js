import React, { Component } from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import "./style.css";

class RandomBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };

    this.baseApiUrl = "http://35.241.204.67/photos/"
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * 8);
  };
  
  setRandomFullSizeBackground = number => {
    return `${this.baseApiUrl}${number}.jpg`
  };

  render() {
    const randomNumber = this.getRandomNumber();

    return (
      <img 
        src={this.setRandomFullSizeBackground(randomNumber)}
        className="random-image" />
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
