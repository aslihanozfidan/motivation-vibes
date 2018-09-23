import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Quote from "../../components/Quote";

const axios = require("axios");

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      loading: false
    };
  }

  getRandomQuote = () => {
    this.setState({ loading: true });
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(response => {
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          loading: false
        });
      })
      .catch(error => {
        console.error(error, "in quote");
      });
  };

  componentDidMount = () => {
    this.getRandomQuote();
  };

  render() {
    return (
      <div className="flex">
        <Quote
          author={this.state.author}
          quote={this.state.quote}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

QuoteContainer.defaultProps = {
  quote: "",
  author: ""
};

QuoteContainer.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string
};

export default QuoteContainer;
