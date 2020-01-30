import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import './style.css'

const Quote = ({ loading, quote, author }) => {
  return (
    <div>
      <div className='quote-text-container'>
        <Loading classNames={`loading-container ${loading ? 'show' : 'hidden'}`} />
        <p className={`quote-text ${loading ? 'hidden' : 'show'}`}>{quote}</p>
      </div>
      <p className={'quote-author'}>{author}</p>
    </div>
  )
}

Quote.propTypes = {
  loading: PropTypes.bool,
  quote: PropTypes.string,
  author: PropTypes.string
}

export default Quote
