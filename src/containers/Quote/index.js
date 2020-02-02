import React, { Component } from 'react'
import Quote from '../../components/Quote'
import QuoteService from './../../services/QuoteService'
import Cookies from 'js-cookie'
import './style.css'

class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: null,
      author: null,
      loading: false,
      isOpenTour: false
    }

    this.quoteService = new QuoteService()
  }

  getRandomQuote = async () => {
    this.setState({ loading: true })
    let quoteData = await this.quoteService.getQuote()
    if (quoteData.quote.length > 120) {
      this.getRandomQuote()
    }

    if (!this.hasTourCookie()) {
      this.setTourCookie(true)
    } else {
      this.setState({ isOpenTour: false })
    }

    this.setState({
      quote: quoteData.quote,
      author: quoteData.author,
      loading: false
    })
  }

  hasTourCookie = () => {
    if (Cookies.get('show_tour') == 'true') {
      return true
    } else {
      return false
    }
  }

  setTourCookie = (boolValue) => {
    Cookies.set('show_tour', boolValue)
    this.setState({ isOpenTour: boolValue })
  }

  componentDidMount = () => {
    this.getRandomQuote()
  }

  render() {
    const { author, quote, loading, isOpenTour } = this.state
    return (
      <div className='flex'>
        <div className='quote-container'>
          <Quote
            author={author}
            quote={quote}
            loading={loading}
            isOpenTour={isOpenTour}
            nextClick={() => this.getRandomQuote()}
          />
        </div>
      </div>
    )
  }
}

export default QuoteContainer
