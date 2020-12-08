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

const getListOfIngredients = (ingredients) => {
  return '(' + ingredients.map(d => `'${d}'`).join(',') + ')'
}

connection.connect()
app.post('/recipes/canmake', (req, res) => {
  const query = 'select recipe_id, recipe_name, avg(rating) as avg_rating, descrption as description, minutes_to_prepare from recipe '+
  'left join review using (recipe_id) '+
  'where recipe_id not in '+
  '(select distinct recipe_id from recipe '+
  'left join recipe_has_ingredient using (recipe_id) '+
  'left join ingredient using (ingredient_id) '+
  'where replaced not in '+
  getListOfIngredients(req.body.ingredients) +
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
app.get('/recipe/steps', cors(), (req, res) => {
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

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})