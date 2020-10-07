const recipeService = require('../services/RecipeService');


class RecipeController {
  async index(req, res) {
    try {
    const { i } = req.query;

    const arrayParameter = i.split(", ");

    if(arrayParameter.length > 3 ) return res.status(400).json({error: "More than 3 ingredients were passed"})

    const results = await recipeService.search(arrayParameter);

    return res.json(results);
    } catch (error) {

      return res.status(500).json({error: "Internal server error."})

    }
  }
}

module.exports = new RecipeController;