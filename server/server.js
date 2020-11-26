const RecipeDao = require('./dao/recipe-dao.js')

const express = require('express')
const app = express()
const port = 3000
const dao = new RecipeDao()

app.get('/', (req, res) => {
  console.log(dao.getInvoices())
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})