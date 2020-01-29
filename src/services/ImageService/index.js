const { get } = require('axios')
const IMAGE_API = 'https://api.unsplash.com/photos/?random'
const ACCESS_KEY = 'c282bd4e5d5c9761c7af1f3a5e76e17e16613384df73f02789ec2876e5e53472'

class ImageService {
  getImage = async () => {
    return await get(`${IMAGE_API}&client_id=${ACCESS_KEY}`)
      .then((response) => {
        return {
          isError: false,
          url: response.data[Math.floor(Math.random() * 10)].urls.thumb
        }
      })
      .catch((error) => {
        return {
          isError: true,
          url: null
        }
      })
  }
}

export default ImageService
