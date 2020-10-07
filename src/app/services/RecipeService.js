const axios = require('axios');
const orderIngredients = require('../../utils/ingredientsOrder');
const searchGiphy = require('../../utils/searchGiphy');


class RecipeSevice {
  constructor(){
    this.recipeApi = process.env.RECIPE_PUPPY_API;
  }
  async search(parameter) {
    try {
      const { data: { results } } = await axios.get(`${this.recipeApi}/?i=${parameter.toString()}`);

      const recipes = await Promise.all(results.map(async ({title, ingredients, href: link}) => ({
        title,
        ingredients: await orderIngredients(ingredients),
        link,
        gif: await searchGiphy(title)
      })       
      ))

      const response = { keywords: parameter, recipes };

      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new RecipeSevice();
