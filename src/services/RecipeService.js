const axios = require('axios');
class RecipeSevice {
  constructor(){
    this.giphyApi = process.env.GIPHY_API_ENDPOINT;
    this.recipeApi = process.env.RECIPE_PUPPY_API;
    this.giphyApiKey = process.env.GIPHY_API_KEY;
  }
  async search(parameter) {
    try {
      const { data: { results } } = await axios.get(`${this.recipeApi}/?i=${parameter}`);
      const recipes = results.map(async ({title, ingredients, href: link}) => 
      {
        const { data: { images : { original: { url } } } } = await axios.get(this.giphyApi, { params: {
          q: encodeURI(title),
          api_key: this.giphyApiKey
        } 
      }).catch(err => console.log(err))
      console.log("url", url);
        return {
          title,
          ingredients,
          link,
          gif: "chamada do axios"
        }
      }
      )
      return recipes;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new RecipeSevice;