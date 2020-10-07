const { Router } = require('express');

const recipeController = require('./app/controllers/RecipeController');

const routes = Router();

routes.get('/recipes', recipeController.index);

module.exports = routes;