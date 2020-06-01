const { get } = require('axios')
const { getRandomInt } = require('../../helpers')
const config = require('../../../config')
const QUOTE_API = `${config.default.apiEndpoint}/quotes`

class QuoteService {
  getQuote = async () => {
    return await get(QUOTE_API)
      .then((response) => {
        const randomNumber = getRandomInt(response.data.length)
        const selectedRandomQuote = response.data[randomNumber]

        return {
          quote: selectedRandomQuote.quote,
          author: selectedRandomQuote.owner,
          loading: false
        }
      })
      .catch((error) => {
        return {
          isError: true,
          quote: null,
          author: null,
          loading: false
        }
      })
  }
}

export default QuoteService
