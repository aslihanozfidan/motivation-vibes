import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import loading from '../../../src/assets/loading.svg'

function Loading({ classNames }) {
  return (
    <div
      className={[
        'loading-container',
        classNames
      ].join(' ')}
    >
      <img src={loading} alt='Loading' />
    </div>
  )
}

Loading.propTypes = {
  classNames: PropTypes.string
}

export default Loading
