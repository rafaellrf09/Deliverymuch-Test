const request = require('supertest');
const app = require('../../src/app');

describe("Recipe", () => {
  it('GET /recipes , return object of recipes', async() => {
    const response = await request(app)
                        .get('/recipes')
                        .set('Accept', 'application/json')
                        .query({i: "onions, garlic"});
    expect(response.body).toHaveProperty('recipes');
  });
  
  it('GET /recipes, returns error for having 3 more parameters', async () => {
    const response = await request(app)
      .get('/recipes')
      .set('Accept', 'application/json')
      .query({
        i: "onions, garlic, potato, chicken"
      });
    expect(response.body).toEqual({"error": "More than 3 ingredients were passed"});
  })

  it('GET /recipes, returns error for no passing parameters', async () => {
    const response = await request(app)
      .get('/recipes')
      .set('Accept', 'application/json')
    expect(response.body).toEqual({"error": "Internal server error."});
  })
  
})