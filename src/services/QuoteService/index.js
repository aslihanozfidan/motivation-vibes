const { get } = require('axios')
const QUOTE_API = 'https://quota.glitch.me/random'

class QuoteService {
  getQuote = async () => {
    return await get(QUOTE_API)
      .then((response) => {
        return {
          quote: response.data.quoteText,
          author: response.data.quoteAuthor,
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
