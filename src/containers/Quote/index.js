import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Quote from '../../components/Quote'
import QuoteService from './../../services/QuoteService'
import './style.css'

class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: '',
      loading: false
    }

    this.quoteService = new QuoteService()
  }

  getRandomQuote = async () => {
    this.setState({ loading: true })
    const quoteData = await this.quoteService.getQuote()
    this.setState({
      quote: quoteData.quote,
      author: quoteData.author,
      loading: false
    })
  }

  componentDidMount = () => {
    this.getRandomQuote()
  }

  render() {
    return (
      <div className='flex'>
        <Quote author={this.state.author} quote={this.state.quote} loading={this.state.loading} />
      </div>
    )
  }
}

QuoteContainer.defaultProps = {
  quote: '',
  author: ''
}

QuoteContainer.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string
}

export default QuoteContainer
