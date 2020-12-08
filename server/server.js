const express = require('express')
const app = express()
const port = 3001
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
var config = require('./config.json');

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

const getRegexListOfIngredients = (ingredients) => {
  return '\'^(' + ingredients.join('|') + ')\''
}

connection.connect()

app.post('/recipes/hasingredients', (req, res) => {
  const query = 'select recipe_id, recipe_name, avg(rating) as avg_rating, descrption, minutes_to_prepare from ingredient '+
  'join recipe_has_ingredient using (ingredient_id) '+
  'join recipe using (recipe_id) '+
  'join review using (recipe_id) '+
  'where replaced regexp ' +
  getRegexListOfIngredients(req.body.ingredients) +
  ' group by recipe_id '+
  'order by avg_rating desc '+
  'limit 50;'

  connection.query( query, function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }
    res.send({
      recipe_ids: rows
    })
  })
})

app.post('/recipes/canmake', (req, res) => {
  const query = 'select recipe_id, recipe_name, avg(rating) as avg_rating, descrption as description, minutes_to_prepare from recipe '+
  'left join review using (recipe_id) '+
  'where recipe_id not in '+
  '(select distinct recipe_id from recipe '+
  'left join recipe_has_ingredient using (recipe_id) '+
  'left join ingredient using (ingredient_id) '+
  'where replaced not regexp '+
  getRegexListOfIngredients(req.body.ingredients) +
  ' or replaced is null) '+
  'group by recipe_id, recipe_name '+
  'order by avg_rating desc '+
  'limit 50;'

  connection.query( query, function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }
    res.send({
      recipe_ids: rows
    })
  })
})


app.get('/recipe/ingredients', cors(), (req, res) => {
  const query = 'select ingredient_name from recipe '+
  'join recipe_has_ingredient using (recipe_id) ' +
  'join ingredient using (ingredient_id) ' +
  'where recipe_id = ' + req.query.recipe_id + ' ;'

  connection.query( query, function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }
    const ingredients = rows.map(row => row.ingredient_name)
    res.send({
      ingredients: ingredients
    })
  })
})

app.get('/recipe/tags', cors(), (req, res) => {
  const query = 'select tag_name from recipe '+
  'join recipe_has_tag using (recipe_id) ' +
  'join tag using (tag_id) ' +
  'where recipe_id = ' + req.query.recipe_id + ' ;'

  connection.query( query, function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }
    const tags = rows.map(row => row.tag_name)
    res.send({
      tags: tags
    })
  })
})

// TODO the order is wrong i think
app.get('/recipe/steps', (req, res) => {
  const query = 'select step_description from recipe '+
  'join step using (recipe_id) ' +
  'where recipe_id = ' + req.query.recipe_id + ' ;'

  connection.query( query, function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }
    const steps = rows.map(row => row.step_description)
    res.send({
      steps: steps
    })
  })
})

app.get('/recipe/nutrition', (req, res) => {
  const query = 'select calories, daily_fat_pct, daily_sugar_pct, daily_sodium_pct, daily_protein_pct, daily_saturated_fat_pct ' +
  'from recipe ' + 
  'join nutrition using (nutrition_id) ' +
  'where recipe_id = ' + req.query.recipe_id + ' ;'

  connection.query( query, function (err, rows, fields) {
    if (err) {
      console.log("err")
      console.log(err.message)
    }
    res.send({
      nutrition: rows
    })
  })
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})