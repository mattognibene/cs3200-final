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
            "avg_rating": 5,
            "minutes_to_prepare": 6,
            "description": "this shit delicious"
        },
        {
            "recipe_id": 379649,
            "recipe_name": "purple hull peas   heart healthy",
            "avg_rating": 4,
            "minutes_to_prepare": 8,
            "description": "yum yum in my tum tum"
        }
    ]
    })
})

// returns all recipes that use the ingredients you have
app.post('/recipes/haveingredients', (req, res) => {
    res.send({
        "recipe_ids": [
            {
                "recipe_id": 137739,
                "recipe_name": "winter mexican style squash whaaaat",
                "avg_rating": 5,
                "minutes_to_prepare": 6,
                "description": "this shit delicious"
            },
            {
                "recipe_id": 379649,
                "recipe_name": "purple hull peas   heart healthy",
                "avg_rating": 4,
                "minutes_to_prepare": 8,
                "description": "yum yum in my tum tum"
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

app.get('/recipe/nutrition', cors(), (req, res) => {
  res.send(
    {
      "nutrition":
          {
              "calories": 311,
              "daily_fat_pct": 0,
              "daily_sugar_pct": 308,
              "daily_sodium_pct": 0,
              "daily_protein_pct": 0,
              "daily_saturated_fat_pct": 0
          }

  }
  )
})

app.listen(port, () => {
  console.log(`Recipe server listening at http://localhost:${port}`)
})