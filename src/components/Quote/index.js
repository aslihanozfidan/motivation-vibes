import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import './style.css'

function Quote({ loading, quote, author, isOpenTour, nextClick }) {
  return (
    <div>
      <div className='quote-text-container'>
        <Loading classNames={`loading-container ${loading ? 'show' : 'hidden'}`} />
        <p className={`quote-text ${loading ? 'hidden' : 'show'}`}>{quote}</p>
        <a className={`btn-next`} onClick={() => nextClick()} />

        <div className={`tour-container ${isOpenTour ? 'show' : 'hidden'}`}>
          <span className='tour-pulsing-circle' />
          <div className='text'>Click here to see a new quote</div>
        </div>
      </div>
      <p className={`quote-author ${loading ? 'hidden' : 'show'}`}>{author}</p>
    </div>
  )
}

Quote.propTypes = {
  loading: PropTypes.bool,
  quote: PropTypes.string,
  author: PropTypes.string
}

export default Quote
