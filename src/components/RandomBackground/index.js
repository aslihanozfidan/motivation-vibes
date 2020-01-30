import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const RandomBackground = ({ image, imageRef }) => {
  return (
    <div ref={imageRef} style={image ? { backgroundImage: `url(${image})` } : null} className='random-image lazyload' />
  )
}

RandomBackground.propTypes = {
  image: PropTypes.string,
  imageRef: PropTypes.object
}

export default RandomBackground
