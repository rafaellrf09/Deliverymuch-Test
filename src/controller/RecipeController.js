const recipeService = require('../services/RecipeService');


class RecipeController {
  async index(req, res) {
    const { i } = req.query;
    const  results = await recipeService.search(i)
    return res.json(results);

  }
}

module.exports = new RecipeController;