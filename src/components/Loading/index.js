import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Loading({ classNames }) {
  return (
    <div
      className={[
        'loading-container',
        classNames
      ].join(' ')}
    >
     <div class="loader"></div>
    </div>
  )
}

Loading.propTypes = {
  classNames: PropTypes.string
}

export default Loading
