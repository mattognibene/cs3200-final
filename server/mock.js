const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');
const cors = require('cors')


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors())

app.post('/recipes/canmake', (req, res) => {
  res.send({
    "recipe_ids": [
        {
            "recipe_id": 137739,
            "recipe_name": "arriba   baked winter squash mexican style",
            "avg_rating": 5
        },
        {
            "recipe_id": 379649,
            "recipe_name": "purple hull peas   heart healthy",
            "avg_rating": 4
        }
    ]
    })
})


app.get('/recipe/ingredients', cors(), (req, res) => {
    res.send({
        "ingredients": [
            "sugar",
            "lemons, rind of",
            "fresh water",
            "fresh lemon juice",
            "ice cubes",
            "club soda"
        ]
    })
})

app.get('/recipe/tags', cors(), (req, res) => {
  res.send({
    "tags": [
        "60-minutes-or-less",
        "time-to-make",
        "course",
        "preparation",
        "occasion",
        "low-protein",
        "healthy",
        "beverages",
        "low-fat",
        "summer",
        "dietary",
        "low-sodium",
        "low-cholesterol",
        "seasonal",
        "low-saturated-fat",
        "healthy-2",
        "low-in-something",
        "presentation",
        "served-cold"
    ]
    })
})

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
      tags: steps
    })
  })
})

app.get('/recipe/steps', cors(), (req, res) => {
  res.send(
    {
        "steps": [
            "into a 1 quart jar with tight fitting lid , put sugar and lemon peel , or zest",
            "add 1 1 / 2 cups very hot water",
            "with lid fitted firmly , shake jar until sugar is dissolved",
            "add lemon juice",
            "refrigerate until chilled",
            "to serve: into each 12-ounce glass , over ice cubes , pour 1 / 4 cup of the lemon syrup",
            "then add chilled club soda or , if you prefer , water",
            "stir to mix well"
        ]
    }
  )
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})