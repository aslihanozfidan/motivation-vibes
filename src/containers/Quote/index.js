import React, { Component } from 'react'
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
    let quoteData = await this.quoteService.getQuote()
    if (quoteData.quote.length > 120) {
      this.getRandomQuote()
    }
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
        <div className='quote-container'>
          <Quote author={this.state.author} quote={this.state.quote} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default QuoteContainer
