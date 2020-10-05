const { Router } = require('express');

const recipeController = require('./controller/RecipeController');

const routes = Router();

routes.get('/recipes', recipeController.index);

module.exports = routes;