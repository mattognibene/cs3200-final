const RecipeDao = require('./dao/recipe-dao.js')

const express = require('express')
const app = express()
const port = 3000
const dao = new RecipeDao()

app.get('/recipe', (req, res) => {
  // TODO maybe some error handling for bad requests
  // TODO dao.getRecipes(req)
  res.send({
    recipes: [
      {name: 'pizza', ingredients: ['cheese', 'dough', 'tomato sauce']},
      {name: 'ribeye steak', ingredients: ['ribeye steak', 'garlic', 'rosemary', 'butter']},
      {name: 'chicken adobo', ingredients: ['chicken', 'adobo']}
    ]
  })
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})