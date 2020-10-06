const orderIngredients = async (ingredients) => {
  const arrayingredients = ingredients.split(', ');
  const ordernateIngredients = arrayingredients.sort();
  return ordernateIngredients;
}

module.exports = orderIngredients;