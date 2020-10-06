const giphyApi = process.env.GIPHY_API_ENDPOINT;
const giphyApiKey = process.env.GIPHY_API_KEY;
const axios = require('axios');

const searchGiphy = async (text) => {
  try {
    const {
      data: {
        data
      }
    } = await axios.get(`${giphyApi}`, {
      params: {
        q: encodeURI(text),
        api_key: giphyApiKey,
        limit: 1
      }
    })
    return data[0].images.original.url;

  } catch (error) {
    console.log("err", error);
    return "";
  }
}

module.exports = searchGiphy;