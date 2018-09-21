import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

const axios = require("axios");

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  getRandomQuote = () => {
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(response => {
        console.log(response, "in quote");
        this.setState({ quote: response.data.quote });
        this.setState({ author: response.data.author });
      })
      .catch(error => {
        console.error(error, "in quote");
      });
  };

  componentDidMount = () => {
    this.getRandomQuote();
  };

  render() {
    const quoteArea = (
      <div>
        <div>
          <p>{this.state.quote}</p>
          <p>{this.state.author}</p>
        </div>
      </div>
    );
    return <div className="flex">{quoteArea}</div>;
  }
}

Quote.defaultProps = {
  quote: "",
  author: ""
};

Quote.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string
};

export default Quote;
