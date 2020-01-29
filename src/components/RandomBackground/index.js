import React, { Component } from 'react'
import ImageService from '../../services/ImageService'
import './style.css'

class RandomBackground extends Component {
  constructor(props) {
    super(props)

    this.state = { image: null, isLoaded: false }
    this.imageService = new ImageService()
    this.bgImage = React.createRef()
  }

  componentDidMount = () => {
    this.getImage()
    this.setState({ isLoaded: true })
  }

  getImage = async () => {
    const imageData = await this.imageService.getImage()

    this.setState({ image: imageData }, () => {
      if (
        this.bgImage.current.style &&
        this.bgImage.current.style.backgroundImage &&
        this.bgImage.current.classList.contains('lazyload')
      ) {
        this.bgImage.current.classList.remove('lazyload')
      }
    })
  }

  render() {
    return (
      <div
        ref={this.bgImage}
        style={this.state.image && this.state.image.url ? { backgroundImage: `url(${this.state.image.url})` } : null}
        className='random-image lazyload'
      />
    )
  }
}

export default RandomBackground
