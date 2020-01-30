import React, { Component } from 'react'
import ImageService from '../../services/ImageService'
import RandomBackgroundComponent from '../../components/RandomBackground'

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
      <RandomBackgroundComponent
        imageRef={this.bgImage}
        image={this.state.image && this.state.image.url ? this.state.image.url : null}
      />
    )
  }
}

export default RandomBackground
